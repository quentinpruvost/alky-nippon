<script lang="ts">
    import { quizQuestions } from '$lib/data/quiz';
    import { fly, fade } from 'svelte/transition';

    // États du questionnaire
    let currentIndex = $state(0);
    let answers = $state<Record<string, any>>({});
    let step = $state('quiz'); // quiz | offers | success
    let selectedPlan = $state('');
    let isSubmitting = $state(false);
    let direction = $state(1);
    let errorMessage = $state('');

    const currentQuestion = $derived(quizQuestions[currentIndex]);
    const progress = $derived(((currentIndex + 1) / quizQuestions.length) * 100);

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

    // FONCTION DE TEST ET D'ENVOI
    async function handlePaymentAndSubmit(plan: string) {
        selectedPlan = plan;
        isSubmitting = true;
        errorMessage = '';
        
        // 1. Préparation d'un objet simple pour éviter les erreurs de format
        const finalPayload: Record<string, string> = {
            _subject: `Nouvelle commande Voyage - Formule ${plan}`,
            client_email: answers.email || "Non renseigné",
            client_name: answers.name || "Anonyme",
            formule: plan
        };

        // On ajoute les autres réponses en les transformant en texte
        Object.keys(answers).forEach(key => {
            if (key !== 'email' && key !== 'name') {
                finalPayload[key] = Array.isArray(answers[key]) ? answers[key].join(', ') : String(answers[key]);
            }
        });

        try {
            // Tentative d'envoi
            const response = await fetch("https://formspree.io/f/mkoyngal", {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(finalPayload)
            });

            const result = await response.json();

            if (response.ok) {
                // Succès total
                setTimeout(() => {
                    isSubmitting = false;
                    step = 'success';
                }, 1000);
            } else {
                // Formspree renvoie une erreur spécifique
                console.error("Réponse Formspree:", result);
                throw new Error(result.error || "Le formulaire n'est pas encore actif.");
            }
        } catch (error: any) {
            console.error("Erreur détaillée:", error);
            isSubmitting = false;
            errorMessage = `Erreur : ${error.message}. Vérifiez que vous avez confirmé votre email sur Formspree.`;
        }
    }

    function toggleMultiple(val: string) {
        let current = answers[currentQuestion.id] || [];
        if (current.includes(val)) {
            answers[currentQuestion.id] = current.filter((i: string) => i !== val);
        } else {
            answers[currentQuestion.id] = [...current, val];
        }
    }
</script>

<div class="min-h-screen bg-[#faf9f6] pt-32 pb-20 flex flex-col items-center">
    
    {#if step === 'quiz'}
        <div class="w-full max-w-3xl h-1.5 bg-gray-200 fixed top-24 left-1/2 -translate-x-1/2 z-50 rounded-full overflow-hidden">
            <div class="h-full bg-[#bc002d] transition-all duration-700" style="width: {progress}%"></div>
        </div>

        <div class="container max-w-2xl px-6">
            <div class="grid grid-cols-1 grid-rows-1">
                {#key currentIndex}
                    <div in:fly={{ x: 30 * direction, duration: 400, delay: 200 }} out:fade={{ duration: 200 }} class="col-start-1 row-start-1 w-full">
                        <div class="flex justify-between items-center mb-8">
                            <span class="text-[#bc002d] font-bold text-[10px] tracking-widest uppercase">Étape {currentIndex + 1}/{quizQuestions.length}</span>
                            {#if currentIndex > 0}
                                <button onclick={prevStep} class="text-gray-400 text-[10px] font-bold uppercase hover:text-black">← Retour</button>
                            {/if}
                        </div>
                        <h2 class="font-serif text-4xl mb-12 text-gray-900 leading-tight">{currentQuestion.label}</h2>
                        <div class="grid gap-3">
                            {#if currentQuestion.type === 'choice'}
                                {#each currentQuestion.options || [] as opt}
                                    <button onclick={() => nextStep(opt.value)} class="flex items-center gap-5 p-6 bg-white border border-gray-100 hover:border-[#bc002d] hover:translate-x-2 transition-all text-left shadow-sm group">
                                        <span class="text-3xl group-hover:scale-110 transition-transform">{opt.icon}</span>
                                        <span class="font-bold text-[13px] tracking-widest uppercase">{opt.label}</span>
                                    </button>
                                {/each}
                            {:else if currentQuestion.type === 'multiple'}
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {#each currentQuestion.options || [] as opt}
                                        <button onclick={() => toggleMultiple(opt.value)} class="flex items-center gap-4 p-5 border transition-all {answers[currentQuestion.id]?.includes(opt.value) ? 'bg-[#bc002d] text-white border-[#bc002d]' : 'bg-white border-gray-100 text-gray-900'}">
                                            <span class="text-2xl">{opt.icon}</span>
                                            <span class="font-bold text-[11px] tracking-wide uppercase">{opt.label}</span>
                                        </button>
                                    {/each}
                                </div>
                                <button onclick={() => nextStep(answers[currentQuestion.id])} class="mt-8 bg-black text-white py-5 font-bold text-[11px] tracking-widest uppercase hover:bg-[#bc002d]">Continuer →</button>
                            {:else}
                                <input type={currentQuestion.type === 'number' ? 'number' : 'text'} bind:value={answers[currentQuestion.id]} class="w-full p-6 bg-white border-b-2 border-gray-200 text-2xl font-serif outline-none focus:border-[#bc002d] mb-6" placeholder={currentQuestion.placeholder} />
                                <button onclick={() => nextStep(answers[currentQuestion.id])} class="bg-black text-white py-5 px-10 font-bold text-[11px] tracking-widest uppercase disabled:opacity-30" disabled={!answers[currentQuestion.id]}>Continuer</button>
                            {/if}
                        </div>
                    </div>
                {/key}
            </div>
        </div>

    {:else if step === 'offers'}
        <div in:fly={{ y: 20, duration: 600 }} class="container max-w-5xl px-6 text-center">
            <h2 class="font-serif text-5xl mb-12 italic">Votre voyage est <span class="text-[#bc002d] not-italic text-6xl">prêt.</span></h2>

            {#if errorMessage}
                <div class="bg-red-50 text-red-600 p-6 mb-8 text-xs font-bold uppercase tracking-widest border border-red-200 animate-pulse">
                    ⚠️ {errorMessage}
                </div>
            {/if}

            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- ESSENTIEL -->
                <div class="bg-white border border-gray-100 p-10 flex flex-col items-center shadow-sm relative transition-all hover:shadow-md">
                    <span class="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-gray-400">Digital</span>
                    <div class="text-5xl font-serif mb-8 text-black">0€</div>
                    <ul class="text-left space-y-4 mb-12 text-sm text-gray-500">
                        <li>• Itinéraire complet (PDF)</li>
                        <li>• Guide logistique complet</li>
                        <li>• Liste de restaurants typiques</li>
                    </ul>
                    <button 
                        disabled={isSubmitting}
                        onclick={() => handlePaymentAndSubmit('ESSENTIEL')} 
                        class="w-full bg-black text-white py-5 font-bold text-[11px] tracking-widest uppercase hover:bg-[#bc002d] transition-all disabled:opacity-50"
                    >
                        {#if isSubmitting && selectedPlan === 'ESSENTIEL'}
                            <span class="flex items-center justify-center gap-2">
                                <span class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Connexion sécurisée...
                            </span>
                        {:else}
                            Obtenir mon itinéraire
                        {/if}
                    </button>
                </div>

                <!-- PREMIUM -->
                <div class="bg-white border-2 border-[#bc002d] p-10 flex flex-col items-center shadow-2xl relative scale-105 z-10">
                    <div class="bg-[#bc002d] text-white text-[9px] font-bold px-6 py-1.5 absolute top-4 -right-10 rotate-45 w-40 uppercase tracking-tighter">Recommandé</div>
                    <span class="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-[#bc002d]">Expert</span>
                    <div class="text-5xl font-serif mb-8 text-black">0€</div>
                    <ul class="text-left space-y-4 mb-12 text-sm text-gray-700">
                        <li>• <strong>Tout de la formule Digital</strong></li>
                        <li>• <strong>Visio avec un expert (45 min)</strong></li>
                        <li>• Support WhatsApp prioritaire</li>
                    </ul>
                    <button 
                        disabled={isSubmitting}
                        onclick={() => handlePaymentAndSubmit('PREMIUM')} 
                        class="w-full bg-[#bc002d] text-white py-5 font-bold text-[11px] tracking-widest uppercase hover:bg-black transition-all disabled:opacity-50"
                    >
                        {#if isSubmitting && selectedPlan === 'PREMIUM'}
                            <span class="flex items-center justify-center gap-2">
                                <span class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Paiement en cours...
                            </span>
                        {:else}
                            Réserver avec un expert
                        {/if}
                    </button>
                </div>
            </div>
        </div>

    {:else if step === 'success'}
        <div in:fly={{ y: 30, duration: 800 }} class="text-center py-20 px-6 max-w-xl mx-auto">
            <div class="w-24 h-24 bg-[#bc002d] text-white rounded-full flex items-center justify-center text-5xl mx-auto mb-10 shadow-2xl">✓</div>
            <h2 class="font-serif text-6xl mb-6 italic">Merci, <span class="text-black not-italic font-bold">{answers.name}</span>.</h2>
            <p class="text-gray-600 leading-relaxed text-lg mb-12">
                Votre demande <strong>{selectedPlan}</strong> a été validée. Votre guide personnalisé est en route vers <strong>{answers.email}</strong>.
            </p>
            <a href="/" class="bg-black text-white px-12 py-6 font-bold text-[11px] tracking-widest uppercase shadow-lg hover:bg-[#bc002d] transition-all">Retour à l'accueil</a>
        </div>
    {/if}
</div>

<style>
    :global(body) { overflow-x: hidden; background-color: #faf9f6; }
</style>