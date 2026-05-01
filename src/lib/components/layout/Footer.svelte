<script lang="ts">
	import { Camera, Video, Share2, Send } from 'lucide-svelte';
</script>

<footer class="bg-[#111] pb-10 pt-20 text-white">
	<div class="container mx-auto px-6 lg:px-24">
		<div class="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
			<div class="lg:col-span-1">
				<a href="/" class="mb-6 flex items-center gap-2">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-jp-red text-sm font-bold italic text-white"
					>
						AN
					</div>
					<span class="text-lg font-bold uppercase tracking-tighter">AlkyNippon</span>
				</a>
				<p class="mb-6 text-xs leading-relaxed text-gray-500">
					Guides et outils pour préparer le Japon : destinations, blog pratique et configurateur d’itinéraire.
				</p>
				<div class="flex gap-4 text-gray-400">
					<a href="/contact" aria-label="Instagram" class="transition-colors hover:text-white"><Camera size={18} /></a>
					<a href="/contact" aria-label="Youtube" class="transition-colors hover:text-white"><Video size={18} /></a>
					<a href="/contact" aria-label="Partager" class="transition-colors hover:text-white"><Share2 size={18} /></a>
					<a href="/contact" aria-label="Contact" class="transition-colors hover:text-white"><Send size={18} /></a>
				</div>
			</div>

			<div>
				<h4 class="mb-6 text-[11px] font-bold uppercase tracking-widest text-white">Destinations</h4>
				<ul class="flex flex-col gap-3">
					<li><a href="/destinations/tokyo" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Tokyo</a></li>
					<li><a href="/destinations/kyoto" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Kyoto</a></li>
					<li><a href="/destinations/osaka" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Osaka</a></li>
					<li><a href="/carte" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Carte</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-6 text-[11px] font-bold uppercase tracking-widest text-white">Préparer</h4>
				<ul class="flex flex-col gap-3">
					<li><a href="/preparer" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Outils & checklist</a></li>
					<li><a href="/conseils" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Conseils</a></li>
					<li><a href="/itineraires" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Itinéraires</a></li>
					<li><a href="/blog" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Blog</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-6 text-[11px] font-bold uppercase tracking-widest text-white">Légal</h4>
				<ul class="flex flex-col gap-3">
					<li><a href="/a-propos" class="text-xs text-gray-500 transition-colors hover:text-jp-red">À propos</a></li>
					<li><a href="/contact" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Contact</a></li>
					<li><a href="/mentions-legales" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Mentions légales</a></li>
					<li><a href="/confidentialite" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Confidentialité</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-6 text-[11px] font-bold uppercase tracking-widest text-white">Ressources</h4>
				<ul class="flex flex-col gap-3">
					<li><a href="/blog/quand-partir-japon" class="text-xs text-gray-500 transition-colors hover:text-jp-red">Quand partir</a></li>
					<li><a href="/blog/jr-pass-suica-pasmo" class="text-xs text-gray-500 transition-colors hover:text-jp-red">JR Pass & IC</a></li>
					<li><a href="/blog/itineraire-2-semaines-japon" class="text-xs text-gray-500 transition-colors hover:text-jp-red">2 semaines</a></li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center md:flex-row md:text-left"
		>
			<p class="text-[10px] text-gray-600">© 2026 AlkyNippon — Tous droits réservés</p>
			<div class="flex gap-6 text-[10px] uppercase tracking-widest text-gray-600">
				<a href="/mentions-legales" class="transition-colors hover:text-white">Mentions légales</a>
				<a href="/confidentialite" class="transition-colors hover:text-white">Confidentialité</a>
			</div>
		</div>
	</div>
</footer>
