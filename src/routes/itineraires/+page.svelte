<script lang="ts">
    import { quizQuestions } from '$lib/data/quiz';
    import { fly, fade } from 'svelte/transition';
    import { page } from '$app/state';

    // ── États du questionnaire ─────────────────────────────────────
    let currentIndex = $state(0);
    let answers     = $state<Record<string, any>>({});
    let step        = $state<'quiz' | 'offers' | 'success' | 'cancelled'>('quiz');
    let selectedPlan = $state('');
    let isSubmitting = $state(false);
    let direction    = $state(1);
    let errorMessage = $state('');

    const currentQuestion = $derived(quizQuestions[currentIndex]);
    const progress        = $derived(((currentIndex + 1) / quizQuestions.length) * 100);

    // ── Gestion du retour Stripe (success / cancel) ────────────────
    $effect(() => {
        const params = page.url.searchParams;
        if (params.get('success') === 'true') {
            selectedPlan = params.get('plan') ?? '';
            step = 'success';
        } else if (params.get('cancelled') === 'true') {
            step = 'cancelled';
        }
    });

    // ── Navigation dans le quiz ────────────────────────────────────
    function nextStep(value?: any) {
        if (value !== undefined) answers[currentQuestion.id] = value;
        if (currentIndex < quizQuestions.length - 1) {
            direction = 1;
            currentIndex++;
        } else {
            step = 'offers';
        }
    }

    function prevStep() {
        if (currentIndex > 0) {
            direction = -1;
            currentIndex--;
        }
    }

    function toggleMultiple(val: string) {
        let current: string[] = answers[currentQuestion.id] || [];
        if (current.includes(val)) {
            answers[currentQuestion.id] = current.filter((i) => i !== val);
        } else {
            answers[currentQuestion.id] = [...current, val];
        }
    }

    // ── Lancement du paiement Stripe ──────────────────────────────
    async function handleStripeCheckout(plan: string) {
        selectedPlan = plan;
        isSubmitting = true;
        errorMessage = '';

        try {
            const res = await fetch('/api/create-checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan, answers })
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message ?? 'Erreur lors de la création du paiement.');

            // Redirection vers Stripe Checkout
            if (data.url) window.location.href = data.url;
        } catch (err: any) {
            console.error(err);
            errorMessage = err.message || 'Une erreur est survenue. Veuillez réessayer.';
            isSubmitting = false;
        }
    }
</script>

<svelte:head>
	<title>Configurateur d'itinéraire — AlkyNippon</title>
	<meta
		name="description"
		content="Questionnaire pour personnaliser votre voyage au Japon : préférences, budget, saison — puis choix de formule et paiement sécurisé."
	/>
</svelte:head>

<div id="configurateur" class="min-h-screen bg-[#faf9f6] pt-28 pb-20 flex flex-col items-center scroll-mt-28">

    {#if step === 'quiz'}
        <!-- Barre de progression fixe -->
        <div class="w-full max-w-3xl h-1 bg-gray-200 fixed top-[72px] left-1/2 -translate-x-1/2 z-50 overflow-hidden">
            <div class="h-full bg-[#bc002d] transition-all duration-700" style="width: {progress}%"></div>
        </div>

        <div class="container max-w-2xl px-4 sm:px-6 pt-8">
            <div class="grid grid-cols-1 grid-rows-1">
                {#key currentIndex}
                    <div
                        in:fly={{ x: 30 * direction, duration: 400, delay: 200 }}
                        out:fade={{ duration: 200 }}
                        class="col-start-1 row-start-1 w-full"
                    >
                        <!-- En-tête de la question -->
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-[#bc002d] font-bold text-[10px] tracking-widest uppercase">
                                Étape {currentIndex + 1} / {quizQuestions.length}
                            </span>
                            {#if currentIndex > 0}
                                <button
                                    onclick={prevStep}
                                    class="text-gray-400 text-[10px] font-bold uppercase hover:text-black transition-colors"
                                >
                                    ← Retour
                                </button>
                            {/if}
                        </div>

                        <!-- Question -->
                        <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 text-gray-900 leading-tight">
                            {currentQuestion.label}
                        </h2>

                        <!-- Réponses -->
                        <div class="grid gap-3">
                            {#if currentQuestion.type === 'choice'}
                                {#each currentQuestion.options ?? [] as opt}
                                    <button
                                        onclick={() => nextStep(opt.value)}
                                        class="flex items-center gap-4 p-4 sm:p-5 bg-white border border-gray-100 hover:border-[#bc002d] hover:translate-x-1 transition-all text-left shadow-sm group"
                                    >
                                        <span class="text-2xl sm:text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                                            {opt.icon}
                                        </span>
                                        <span class="font-bold text-[12px] tracking-widest uppercase">{opt.label}</span>
                                    </button>
                                {/each}

                            {:else if currentQuestion.type === 'multiple'}
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {#each currentQuestion.options ?? [] as opt}
                                        <button
                                            onclick={() => toggleMultiple(opt.value)}
                                            class="flex items-center gap-3 p-4 border transition-all {(answers[currentQuestion.id] ?? []).includes(opt.value)
                                                ? 'bg-[#bc002d] text-white border-[#bc002d]'
                                                : 'bg-white border-gray-100 text-gray-900'}"
                                        >
                                            <span class="text-xl">{opt.icon}</span>
                                            <span class="font-bold text-[11px] tracking-wide uppercase">{opt.label}</span>
                                        </button>
                                    {/each}
                                </div>
                                <button
                                    onclick={() => nextStep(answers[currentQuestion.id])}
                                    class="mt-6 bg-black text-white py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-[#bc002d] transition-colors"
                                >
                                    Continuer →
                                </button>

                            {:else}
                                <input
                                    type={currentQuestion.type === 'number' ? 'number' : 'text'}
                                    bind:value={answers[currentQuestion.id]}
                                    class="w-full p-4 sm:p-5 bg-white border-b-2 border-gray-200 text-xl sm:text-2xl font-serif outline-none focus:border-[#bc002d] mb-4"
                                    placeholder={currentQuestion.placeholder}
                                />
                                <button
                                    onclick={() => nextStep(answers[currentQuestion.id])}
                                    class="bg-black text-white py-4 px-8 font-bold text-[11px] tracking-widest uppercase disabled:opacity-30 hover:bg-[#bc002d] transition-colors"
                                    disabled={!answers[currentQuestion.id]}
                                >
                                    Continuer
                                </button>
                            {/if}
                        </div>
                    </div>
                {/key}
            </div>
        </div>

    {:else if step === 'offers'}
        <div in:fly={{ y: 20, duration: 600 }} class="container max-w-5xl px-4 sm:px-6 text-center">
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 italic">
                Votre voyage est <span class="text-[#bc002d] not-italic font-bold">prêt.</span>
            </h2>
            <p class="text-gray-500 text-sm mb-10 max-w-lg mx-auto">
                Choisissez la formule qui correspond à vos besoins. Paiement sécurisé via Stripe.
            </p>

            {#if errorMessage}
                <div class="bg-red-50 text-red-700 p-4 mb-8 text-xs font-semibold border border-red-200 max-w-xl mx-auto text-left">
                    ⚠️ {errorMessage}
                </div>
            {/if}

            <!-- Grille des formules -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

                <!-- BASIQUE -->
                <div class="bg-white border border-gray-100 p-6 sm:p-8 flex flex-col shadow-sm transition hover:shadow-md">
                    <span class="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-gray-400">Basique</span>
                    <div class="text-3xl sm:text-4xl font-serif mb-6 text-black">7,99 €</div>
                    <ul class="text-left space-y-3 mb-8 text-sm text-gray-500 flex-1">
                        <li>• PDF simplifié personnalisé</li>
                        <li>• Grandes étapes du voyage</li>
                        <li>• Recommandations adaptées</li>
                    </ul>
                    <button
                        disabled={isSubmitting}
                        onclick={() => handleStripeCheckout('BASIQUE')}
                        class="w-full bg-[#bc002d] text-white py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-black transition-all disabled:opacity-50"
                    >
                        {#if isSubmitting && selectedPlan === 'BASIQUE'}
                            <span class="flex items-center justify-center gap-2">
                                <span class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Redirection…
                            </span>
                        {:else}
                            Choisir — 7,99 €
                        {/if}
                    </button>
                </div>

                <!-- COMPLÈTE (recommandée) -->
                <div class="bg-white border-2 border-[#bc002d] p-6 sm:p-8 flex flex-col shadow-2xl relative">
                    <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#bc002d] text-white text-[9px] font-bold px-4 py-1 uppercase tracking-widest whitespace-nowrap">
                        ⭐ Recommandée
                    </span>
                    <span class="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-[#bc002d]">Complète</span>
                    <div class="text-3xl sm:text-4xl font-serif mb-6 text-black">19,99 €</div>
                    <ul class="text-left space-y-3 mb-8 text-sm text-gray-700 flex-1">
                        <li>• <strong>PDF complet, prêt à l'emploi</strong></li>
                        <li>• Itinéraire jour par jour détaillé</li>
                        <li>• Budget précis et optimisé</li>
                        <li>• Conseils transport inclus</li>
                        <li>• Activités et lieux concrets</li>
                    </ul>
                    <button
                        disabled={isSubmitting}
                        onclick={() => handleStripeCheckout('COMPLÈTE')}
                        class="w-full bg-[#bc002d] text-white py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-black transition-all disabled:opacity-50"
                    >
                        {#if isSubmitting && selectedPlan === 'COMPLÈTE'}
                            <span class="flex items-center justify-center gap-2">
                                <span class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Redirection…
                            </span>
                        {:else}
                            Choisir — 19,99 €
                        {/if}
                    </button>
                </div>

                <!-- PREMIUM -->
                <div class="bg-white border border-gray-100 p-6 sm:p-8 flex flex-col shadow-sm transition hover:shadow-md sm:col-span-2 lg:col-span-1">
                    <span class="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-gray-400">Premium</span>
                    <div class="text-3xl sm:text-4xl font-serif mb-6 text-black">39,99 €</div>
                    <ul class="text-left space-y-3 mb-8 text-sm text-gray-500 flex-1">
                        <li>• <strong>Tout le contenu de la formule Complète</strong></li>
                        <li>• Ajustements selon votre projet</li>
                        <li>• Support par e-mail (2 à 3 échanges, réponse sous 48 h)</li>
                    </ul>
                    <button
                        disabled={isSubmitting}
                        onclick={() => handleStripeCheckout('PREMIUM')}
                        class="w-full bg-[#bc002d] text-white py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-black transition-all disabled:opacity-50"
                    >
                        {#if isSubmitting && selectedPlan === 'PREMIUM'}
                            <span class="flex items-center justify-center gap-2">
                                <span class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Redirection…
                            </span>
                        {:else}
                            Choisir — 39,99 €
                        {/if}
                    </button>
                </div>
            </div>

            <!-- Rassurance paiement -->
            <p class="mt-8 text-[10px] text-gray-400 uppercase tracking-widest">
                🔒 Paiement 100 % sécurisé par Stripe · Carte bancaire acceptée
            </p>
        </div>

    {:else if step === 'success'}
        <div in:fly={{ y: 30, duration: 800 }} class="text-center py-16 px-6 max-w-xl mx-auto">
            <div class="w-20 h-20 bg-[#bc002d] text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-2xl">
                ✓
            </div>
            <h2 class="font-serif text-4xl sm:text-5xl mb-6 italic">
                Merci, <span class="text-black not-italic font-bold">{answers.name ?? 'cher voyageur'}</span> !
            </h2>
            <p class="text-gray-600 leading-relaxed text-base mb-4">
                Votre paiement pour la formule <strong>{selectedPlan}</strong> a été confirmé.
            </p>
            <p class="text-gray-500 text-sm mb-10">
                Votre guide personnalisé sera envoyé à <strong>{answers.email ?? 'votre adresse e-mail'}</strong> dans les meilleurs délais.
            </p>
            <a
                href="/"
                class="bg-black text-white px-10 py-5 font-bold text-[11px] tracking-widest uppercase shadow-lg hover:bg-[#bc002d] transition-all"
            >
                Retour à l'accueil
            </a>
        </div>

    {:else if step === 'cancelled'}
        <div in:fly={{ y: 20, duration: 600 }} class="text-center py-16 px-6 max-w-xl mx-auto">
            <div class="w-20 h-20 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
                ✕
            </div>
            <h2 class="font-serif text-3xl sm:text-4xl mb-4 text-jp-black">Paiement annulé</h2>
            <p class="text-gray-500 text-sm mb-10 leading-relaxed">
                Pas de souci ! Vous pouvez reprendre votre sélection quand vous le souhaitez.
            </p>
            <button
                onclick={() => { step = 'offers'; }}
                class="bg-[#bc002d] text-white px-10 py-5 font-bold text-[11px] tracking-widest uppercase shadow-lg hover:bg-black transition-all"
            >
                Revoir les formules
            </button>
        </div>
    {/if}
</div>

<style>
    :global(body) { overflow-x: hidden; background-color: #faf9f6; }
</style>