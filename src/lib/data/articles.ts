export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  date: string;
  image: string;
  content: string; // Updated to rich HTML
};

const articles: Article[] = [
  {
    slug: "itineraire-2-semaines-japon",
    title: "Itinéraire 2 semaines au Japon : le guide expert et ultra-complet",
    excerpt:
      "Tokyo, Hakone, Kyoto, Osaka : un rythme réaliste entre grandes étapes et temps libre, avec tous nos repères logistiques, conseils de réservation et astuces sur place.",
    category: "Itinéraires",
    categoryColor: "text-jp-red",
    readTime: "15 min",
    date: "15 mai 2026",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    content: `
			<p>Quatorze jours, c'est souvent la durée idéale pour une première découverte du Japon. Ce laps de temps permet de lier la frénésie ultra-moderne de Tokyo à l'héritage impérial de Kyoto et au dynamisme gastronomique d'Osaka, sans avoir l'impression de courir un marathon quotidien. L'idée fondatrice d'un bon itinéraire est d'alterner les journées denses en découvertes urbaines et les demi-journées plus souples, souvent nécessaires pour absorber le décalage horaire, les imprévus météorologiques et simplement la fatigue d'un voyage à l'autre bout du monde.</p>
			
			<h2>Jours 1 à 5 : L'immersion dans Tokyo</h2>
			<p>Commencez par atterrir à Narita ou Haneda. Prévoyez au moins quatre nuits à Tokyo pour prendre le pouls de la capitale. Divisez vos journées par grandes zones géographiques pour éviter de passer des heures dans le métro :</p>
			<ul>
				<li><strong>Jour 1 :</strong> Arrivée, installation à votre hôtel (privilégiez des quartiers centraux comme Shinjuku, Shibuya ou Ueno sur la ligne Yamanote). Balade légère en soirée pour vous acclimater.</li>
				<li><strong>Jour 2 (L'Ouest dynamique) :</strong> Shibuya (le fameux croisement, Hachiko), Harajuku (sanctuaire Meiji Jingu, rue Takeshita) et Shinjuku en soirée pour ses néons et ses ruelles comme Omoide Yokocho.</li>
				<li><strong>Jour 3 (Tradition et pop-culture) :</strong> Asakusa avec le majestueux Senso-ji le matin, suivi de Ueno et son parc. L'après-midi, plongez dans l'univers de l'électronique et des anime à Akihabara.</li>
				<li><strong>Jour 4 (Modernité et art) :</strong> Odaiba ou TeamLab Planets le matin. L'après-midi, découvrez Ginza pour son architecture ou Roppongi pour ses musées d'art contemporain et sa vue panoramique depuis la Tokyo City View.</li>
				<li><strong>Jour 5 (Excursion d'un jour) :</strong> Selon la saison, une journée à Kamakura pour ses temples en bord de mer, ou à Nikko pour ses sanctuaires richement décorés dans les montagnes.</li>
			</ul>

			<h2>Jour 6 : La parenthèse Hakone et le Mont Fuji</h2>
			<p>Plutôt que de faire un trajet direct Tokyo-Kyoto, faites une halte à Hakone. Cette région montagneuse, célèbre pour ses onsen (sources thermales), offre par temps clair des vues spectaculaires sur le mont Fuji. Passez la nuit dans un ryokan (auberge traditionnelle) pour expérimenter un dîner kaiseki (haute gastronomie japonaise), dormir sur des tatamis et profiter d'un bain chaud thermal relaxant. C'est le moment fort de repos de votre voyage.</p>

			<h2>Jours 7 à 10 : L'âme du Japon à Kyoto</h2>
			<p>Rejoignez Kyoto via le Shinkansen (environ 2h de trajet depuis Odawara/Hakone). Kyoto punit la course aux monuments : préférez deux visites bien cadrées par demi-journée plutôt que cinq temples à la chaîne.</p>
			<ul>
				<li><strong>Jour 7 :</strong> Arrivée à Kyoto. Balade dans les ruelles historiques de Higashiyama (Kiyomizu-dera, Yasaka) et soirée dans Gion ou Pontocho avec l'espoir d'apercevoir une maiko.</li>
				<li><strong>Jour 8 :</strong> Le nord-ouest avec le célèbre Pavillon d'Or (Kinkaku-ji) à l'ouverture, suivi du jardin sec du Ryoan-ji et de la bambouseraie d'Arashiyama l'après-midi.</li>
				<li><strong>Jour 9 :</strong> Levez-vous très tôt pour devancer les foules au Fushimi Inari-taisha et ses milliers de torii vermillon. Consacrez le reste de la journée à des temples moins bondés mais sublimes comme Nanzen-ji ou Tofuku-ji.</li>
				<li><strong>Jour 10 (Excursion à Nara) :</strong> Prenez un train (45 min) pour Nara, ancienne capitale. Promenez-vous dans le parc avec les cerfs sika en liberté et admirez l'immense Bouddha de bronze du Todai-ji.</li>
			</ul>

			<h2>Jours 11 à 13 : Osaka, la capitale de la "Street Food"</h2>
			<p>À peine 30 minutes de train séparent Kyoto d'Osaka, mais l'ambiance y est radicalement différente. Les habitants d'Osaka sont réputés pour leur chaleur humaine, leur humour et leur amour de la bonne chère (le concept de "kuidaore" : se ruiner en nourriture).</p>
			<ul>
				<li><strong>Jour 11 :</strong> Découvrez le château d'Osaka (de l'extérieur pour le parc), puis plongez dans l'ambiance électrique de Namba et Dotonbori à la nuit tombée. Goûtez absolument aux takoyaki (boulettes de poulpe) et à l'okonomiyaki.</li>
				<li><strong>Jour 12 :</strong> Une journée hors du temps au parc d'attractions Universal Studios Japan (pensez au Super Nintendo World !), ou une exploration du quartier rétro de Shinsekai et de l'aquarium Kaiyukan.</li>
				<li><strong>Jour 13 :</strong> Excursion d'une demi-journée à Himeji pour voir le château du Héron blanc, le plus beau château féodal original du Japon, ou visite d'Hiroshima / Miyajima si vous avez pris le JR Pass (attention, la journée sera très longue).</li>
			</ul>

			<h2>Jour 14 : Le retour</h2>
			<p>Départ depuis l'aéroport du Kansai (KIX) si vous avez pris un vol multi-destinations (très recommandé pour gagner du temps), ou retour à Tokyo en Shinkansen pour votre vol retour. Prévoyez toujours de l'avance pour ces ultimes trajets.</p>
			
			<h2>Conseil Logistique Ultime</h2>
			<p>Simulez vos trajets longue distance avant d'acheter un pass ferroviaire. Depuis les hausses de prix de la fin 2023, un simple aller-retour Tokyo-Kyoto ne rentabilise plus systématiquement un JR Pass national de 7 jours. Faites vos calculs ou privilégiez l'achat de billets à l'unité combiné à une carte Suica pour vos déplacements locaux en métro.</p>
		`,
  },
  {
    slug: "jr-pass-suica-pasmo",
    title: "JR Pass, Suica, Pasmo : Le guide définitif des transports",
    excerpt:
      "Quand le JR Pass national est rentable (et quand il ne l'est plus), et pourquoi une carte IC reste absolument indispensable au quotidien dans les villes japonaises.",
    category: "Conseils pratiques",
    categoryColor: "text-orange-500",
    readTime: "12 min",
    date: "10 mai 2026",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=80",
    content: `
			<p>Naviguer dans les réseaux de transport japonais peut paraître intimidant de prime abord : des dizaines de compagnies privées cohabitent avec le réseau national JR (Japan Railways), le tout interconnecté dans de gigantesques gares labyrinthiques. Heureusement, deux outils simplifient radicalement la vie des voyageurs : le Japan Rail Pass (JR Pass) et les cartes à puce IC (Suica, Pasmo, Icoca).</p>

			<h2>1. Le Japan Rail Pass : Est-ce encore intéressant ?</h2>
			<p>Le JR Pass est un billet forfaitaire vendu exclusivement aux touristes étrangers, offrant un accès illimité (ou presque) aux trains du réseau JR, y compris la majorité des Shinkansen (trains à grande vitesse), pour une durée de 7, 14 ou 21 jours consécutifs.</p>
			
			<h3>La hausse des prix d'octobre 2023</h3>
			<p>Historiquement, le JR Pass de 7 jours était rentabilisé par un simple trajet aller-retour entre Tokyo et Kyoto. Cependant, avec l'augmentation massive des tarifs (environ +70%), ce calcul n'est plus valable. Aujourd'hui, un JR Pass de 7 jours coûte environ 50 000 yens.</p>
			<p><strong>Quand l'acheter ?</strong></p>
			<ul>
				<li>Si votre itinéraire couvre de grandes distances multiples en peu de temps (ex: Tokyo -> Kyoto -> Hiroshima -> Kanazawa -> Tokyo en 7 jours).</li>
				<li>Si vous privilégiez la flexibilité absolue de pouvoir sauter dans n'importe quel train sans réserver (sauf règles spécifiques).</li>
			</ul>
			<p><strong>Quand l'éviter ?</strong></p>
			<ul>
				<li>Pour le classique Tokyo -> Kyoto -> Osaka -> Retour Tokyo. Acheter des billets à l'unité vous coûtera environ 10 000 yens de moins qu'un JR Pass.</li>
				<li>Si vous restez concentré sur une seule région (comme le Kansai). Dans ce cas, optez pour des pass régionaux spécifiques (ex: Kansai Thru Pass, Hokuriku Arch Pass).</li>
			</ul>

			<h2>2. Les cartes IC : Suica, Pasmo, Icoca... Vos meilleures amies</h2>
			<p>Que vous ayez un JR Pass ou non, posséder une carte IC (Integrated Circuit) est obligatoire. Ce sont des porte-monnaie électroniques rechargeables.</p>
			
			<h3>Pourquoi sont-elles indispensables ?</h3>
			<p>Le métro de Tokyo n'appartient pas à JR (il est divisé entre Tokyo Metro et Toei). À Kyoto, les bus et métros sont municipaux. Dans ces réseaux, votre JR Pass ne fonctionne pas. Au lieu de calculer le tarif à chaque station et d'acheter des tickets individuels aux machines, vous "bipez" votre carte IC en entrant et en sortant. Le montant exact est débité automatiquement.</p>
			
			<h3>Les autres usages des cartes IC</h3>
			<p>La puissance des cartes IC dépasse largement les transports. Elles servent de moyen de paiement universel :</p>
			<ul>
				<li>Dans tous les <em>konbini</em> (FamilyMart, 7-Eleven, Lawson).</li>
				<li>Aux distributeurs automatiques de boissons (jidōhanbaiki).</li>
				<li>Dans de nombreux restaurants de gare, fast-foods et consignes automatiques (coin lockers).</li>
			</ul>

			<h3>Quelle différence entre Suica, Pasmo et Icoca ?</h3>
			<p>Techniquement : aucune. Suica est émise par JR East (Tokyo), Pasmo par les opérateurs privés de Tokyo, Icoca par JR West (Osaka/Kyoto). Elles sont entièrement interopérables à travers le pays. Une carte Suica achetée à Tokyo fonctionnera parfaitement à Kyoto ou Hiroshima.</p>

			<h3>L'intégration Smartphone (Apple Wallet / Google Pay)</h3>
			<p>Si vous possédez un iPhone (modèles 8 ou ultérieurs), vous pouvez dématérialiser votre Suica ou Pasmo via Apple Wallet. C'est la solution ultime : vous rechargez la carte directement avec votre carte bancaire (idéalement sans frais de change) via Apple Pay, et vous passez les portiques en effleurant simplement votre téléphone sans même le déverrouiller. (Attention, sur Android, cela ne fonctionne généralement qu'avec les téléphones achetés au Japon disposant de la puce FeliCa, bien que cela commence à évoluer).</p>

			<h2>Conclusion Stratégique</h2>
			<p>La stratégie optimale pour 90% des voyageurs en 2026 est la suivante : calculez le coût exact de vos trajets Shinkansen avec un simulateur en ligne. S'ils sont inférieurs à 50 000 yens, achetez vos billets Shinkansen à l'unité (en gare ou via l'app SmartEX) et utilisez une carte Suica dématérialisée sur votre smartphone pour absolument tous les autres déplacements locaux et petites dépenses.</p>
		`,
  },
  {
    slug: "kyoto-lieux-incontournables",
    title: "Kyoto : Guide complet des lieux incontournables et secrets",
    excerpt:
      "Prioriser les temples, éviter la surcharge de visites et découvrir l'ancienne capitale impériale hors des sentiers battus sans subir la foule.",
    category: "Destinations",
    categoryColor: "text-blue-500",
    readTime: "14 min",
    date: "02 mai 2026",
    image:
      "https://images.unsplash.com/photo-1624253329394-07805228e467?w=1200&q=80",
    content: `
			<p>Ancienne capitale du Japon pendant plus d'un millénaire, Kyoto abrite une densité stupéfiante de trésors culturels : plus de 1600 temples bouddhistes, 400 sanctuaires shinto, d'innombrables jardins zen et 17 sites classés au patrimoine mondial de l'UNESCO. Mais cette abondance est aussi le plus grand piège pour le voyageur : vouloir tout voir, courir d'un bout à l'autre de la ville, et finir par faire une "overdose de temples". Voici comment organiser vos visites de manière stratégique et respectueuse.</p>

			<h2>1. Higashiyama : L'Est historique</h2>
			<p>C'est le quartier de "carte postale" de Kyoto, avec ses ruelles pavées, ses maisons en bois préservées (machiya) et ses collines verdoyantes.</p>
			<ul>
				<li><strong>Kiyomizu-dera :</strong> Le "Temple de l'eau pure". Célèbre pour son immense plateforme en bois bâtie à flanc de colline sans un seul clou. <em>Conseil : Allez-y à 6h00 du matin à l'ouverture pour éviter la marée humaine.</em></li>
				<li><strong>Sannenzaka et Ninenzaka :</strong> Ces ruelles descendent du Kiyomizu-dera. Elles sont sublimes au lever du soleil ou de nuit. En journée, elles sont bondées de touristes et de boutiques de souvenirs. Vous y trouverez un Starbucks caché dans une maison traditionnelle.</li>
				<li><strong>Ginkaku-ji (Pavillon d'Argent) :</strong> Situé plus au nord. Contrairement à son nom, il n'est pas recouvert d'argent, mais son jardin sec (Karesansui) représentant le mont Fuji et son environnement moussu sont parmi les plus raffinés du pays.</li>
				<li><strong>Le Chemin de la Philosophie :</strong> Une promenade piétonne de 2 kilomètres le long d'un canal bordé de centaines de cerisiers. Sublime au printemps, mais aussi très agréable en automne.</li>
			</ul>

			<h2>2. Le Nord et l'Ouest : L'Or et le Bambou</h2>
			<p>Ces sites sont excentrés, il faut donc bien planifier ses trajets en bus ou métro/train.</p>
			<ul>
				<li><strong>Kinkaku-ji (Pavillon d'Or) :</strong> La merveille la plus photographiée de Kyoto. Le pavillon recouvert de feuilles d'or véritable se reflète majestueusement sur l'étang de Kyoko-chi. À voir idéalement sous la lumière rasante du matin ou en fin d'après-midi.</li>
				<li><strong>Ryoan-ji :</strong> Situé non loin de là, c'est le temple possédant le plus célèbre jardin zen de pierres du Japon. Quinze pierres disposées de telle sorte qu'il est impossible de toutes les voir en même temps, peu importe où vous vous asseyez.</li>
				<li><strong>Arashiyama :</strong> À l'ouest de la ville. La célèbre bambouseraie est un incontournable, mais très vite saturée. Soyez sur place à 7h00 du matin. Poursuivez par la villa Okochi Sanso, souvent ignorée des touristes, qui offre des jardins spectaculaires avec une tasse de matcha incluse dans le billet.</li>
			</ul>

			<h2>3. Le Sud : Les Portes Vermillon</h2>
			<ul>
				<li><strong>Fushimi Inari-taisha :</strong> Le complexe le plus impressionnant. Une randonnée de 4 km à travers la montagne, sous des milliers de portiques (torii) rouges. <em>Conseil de survie : 90% des gens s'arrêtent au bout de 20 minutes. Continuez de grimper. Plus vous montez, plus le calme revient et la forêt devient mystique.</em> C'est ouvert 24h/24 : une ascension de nuit à la lueur des réverbères est une expérience inoubliable (prévoyez du produit anti-moustiques en été).</li>
			</ul>

			<h2>4. Éviter le Surtourisme : Bonnes pratiques et secrets</h2>
			<p>Kyoto souffre du tourisme de masse. Pour apprécier la ville et respecter ses habitants :</p>
			<ul>
				<li><strong>Explorez les temples secondaires :</strong> Oubliez parfois les grands noms. Des lieux comme le <em>Nanzen-ji</em> (et son aqueduc en briques), l'<em>Otagi Nenbutsu-ji</em> (avec ses 1200 statues de pierre aux visages rigolos) ou le <em>Tofuku-ji</em> (spectaculaire en automne) offrent des expériences souvent plus intimes.</li>
				<li><strong>Respectez Gion :</strong> Le quartier des geishas n'est pas un zoo. Il est formellement interdit (et passible de lourdes amendes) de photographier les geikos et maikos sans permission, ou de pénétrer dans les ruelles privées. Restez sur les artères principales (Hanamikoji) et admirez avec les yeux.</li>
				<li><strong>Utilisez le métro et le train :</strong> Les bus de Kyoto sont systématiquement pleins à craquer et coincés dans les embouteillages. Chaque fois que cela est possible, combinez train, métro et marche à pied.</li>
				<li><strong>Rythme :</strong> Fixez-vous une limite de deux grands sites par jour. Utilisez l'après-midi pour vous perdre dans de petites rues, faire du vélo le long de la rivière Kamo, ou vous détendre dans un café de torréfaction locale.</li>
			</ul>
		`,
  },
  {
    slug: "quand-partir-japon",
    title: "Quand partir au Japon ? Le guide complet saison par saison",
    excerpt:
      "Cerisiers, canicule, typhons et feuillages d'automne : un calendrier détaillé pour choisir votre fenêtre de départ selon votre budget, votre tolérance au climat et vos objectifs de voyage.",
    category: "Quand partir",
    categoryColor: "text-jp-red",
    readTime: "10 min",
    date: "15 avril 2026",
    image:
      "https://images.unsplash.com/photo-1522850959076-3297a3115053?w=1200&q=80",
    content: `
			<p>Choisir la date de son voyage au Japon est la décision la plus impactante que vous prendrez. L'archipel japonais s'étirant tout en longueur du nord au sud, il possède quatre saisons extrêmement marquées qui métamorphosent totalement les paysages, l'ambiance, mais aussi le prix des billets d'avion et la fréquentation touristique.</p>

			<h2>1. Le Printemps (Mars à Mai) : La floraison et la foule</h2>
			<p>C'est la saison reine, mondialement célèbre pour les <em>sakura</em> (cerisiers en fleurs).</p>
			<ul>
				<li><strong>Météo :</strong> Températures douces et agréables, idéales pour la marche (15°C à 22°C). Quelques jours de pluie possibles.</li>
				<li><strong>Les atouts :</strong> L'effervescence du <em>hanami</em> (les pique-niques sous les cerisiers), les parcs teintés de rose pâle, une ambiance festive. Après les cerisiers (fin mars/début avril), d'autres floraisons suivent (glycines, azalées).</li>
				<li><strong>Les inconvénients :</strong> C'est la haute saison absolue. Les prix des billets d'avion et des hôtels explosent (prévoyez des réservations 6 mois à l'avance). La foule sur les sites emblématiques de Kyoto peut être étouffante.</li>
				<li><strong>Attention à la Golden Week :</strong> C'est une succession de jours fériés fin avril / début mai. Tout le pays voyage en même temps. Les transports sont pris d'assaut, à éviter si vous le pouvez.</li>
			</ul>

			<h2>2. L'Été (Juin à Août) : Festivals, chaleur et typhons</h2>
			<p>Une saison souvent redoutée par les occidentaux à cause de la rudesse du climat, mais qui offre un visage vibrant du Japon.</p>
			<ul>
				<li><strong>Tsuyu (Saison des pluies) :</strong> De mi-juin à mi-juillet, l'air devient très lourd et les précipitations sont fréquentes (sans être ininterrompues).</li>
				<li><strong>Canicule estivale :</strong> Août est bouillant (35°C, ressenti 40°C) avec un taux d'humidité frôlant les 80%. L'exploration urbaine demande une excellente condition physique et des pauses constantes.</li>
				<li><strong>Les atouts :</strong> C'est la saison des <em>matsuri</em> (festivals traditionnels géants comme le Gion Matsuri à Kyoto ou l'Awa Odori) et des spectaculaires feux d'artifice (<em>hanabi</em>). C'est aussi la seule période où l'ascension du mont Fuji est officiellement ouverte.</li>
				<li><strong>Le risque cyclonique :</strong> Août et septembre sont les mois des typhons. Ils entraînent des annulations de vols et de trains sur quelques jours.</li>
			</ul>

			<h2>3. L'Automne (Septembre à Novembre) : L'autre âge d'or</h2>
			<p>Souvent considéré par les initiés comme la meilleure période absolue pour visiter le Japon.</p>
			<ul>
				<li><strong>Météo :</strong> Le climat redevient sec et cristallin, avec des températures parfaites pour voyager (18°C à 25°C). Septembre peut encore être pluvieux (typhons), mais octobre et novembre sont superbes.</li>
				<li><strong>Les atouts :</strong> Le phénomène des <em>koyo</em> (ou <em>momiji</em>). Les érables se parent d'un rouge flamboyant et les ginkgos d'un jaune éclatant. Les jardins des temples à Kyoto sont à couper le souffle, rivalisant de beauté avec la saison des cerisiers.</li>
				<li><strong>Les inconvénients :</strong> Comme pour le printemps, c'est une saison très prisée (surtout la mi-novembre). Les prix restent élevés et les lieux touristiques sont bondés.</li>
			</ul>

			<h2>4. L'Hiver (Décembre à Février) : Calme, neige et clarté</h2>
			<p>L'hiver japonais est très sous-estimé (en dehors d'Hokkaido prisée par les skieurs).</p>
			<ul>
				<li><strong>Météo :</strong> Froid (0°C à 10°C à Tokyo), mais généralement très sec et ensoleillé du côté de la côte Pacifique (Tokyo, Osaka). Hokkaido et les Alpes japonaises croulent sous des mètres de poudreuse.</li>
				<li><strong>Les atouts :</strong> C'est la saison des petits budgets. Les vols sont moins chers (hors fêtes de fin d'année) et les sites touristiques sont désertés. C'est la meilleure période pour voir le mont Fuji, l'air froid offrant une visibilité parfaite sans la brume estivale. Se baigner dans un <em>rotenburo</em> (bain chaud en extérieur) pendant qu'il neige est une expérience magique.</li>
				<li><strong>Les illuminations :</strong> En décembre, les villes japonaises déploient des illuminations de fin d'année démesurées.</li>
				<li><strong>Les inconvénients :</strong> La nuit tombe très tôt (vers 16h30) raccourcissant vos journées d'exploration. Certains parcs peuvent paraître nus et tristes sans feuilles.</li>
			</ul>

			<h2>Bilan : Quelle est la meilleure période ?</h2>
			<p>Si vous recherchez le climat parfait et des paysages colorés (et que vous avez un budget flexible) : <strong>Novembre</strong> ou <strong>Avril</strong>.<br>
			Si vous fuyez la foule, souhaitez des prix doux et n'avez pas peur du froid : <strong>Février</strong>.<br>
			Si vous voulez une immersion culturelle intense (festivals) et que vous tolérez bien la chaleur tropicale : <strong>Fin Juillet / début Août</strong>.</p>
		`,
  },
  {
    slug: "bonnes-manieres-japon",
    title: "Guide de survie : Les bonnes manières et le savoir-vivre au Japon",
    excerpt:
      "Ne perdez pas la face lors de votre voyage. Des transports en commun aux restaurants, découvrez les règles non écrites de la société japonaise.",
    category: "Conseils pratiques",
    categoryColor: "text-orange-500",
    readTime: "11 min",
    date: "28 avril 2026",
    image:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1200&q=80",
    content: `
			<p>Le Japon est une société où l'harmonie collective (le "Wa") prime sur l'individualisme. De nombreuses règles de politesse, souvent invisibles pour un œil étranger, régissent le quotidien. Si les Japonais sont très indulgents envers les touristes ("les étrangers ne savent pas"), respecter ces codes vous ouvrira de nombreuses portes et vous vaudra le respect et l'aide précieuse des locaux.</p>

			<h2>1. Dans les transports en commun</h2>
			<p>Le métro et les trains japonais sont de véritables bulles de silence, même aux heures de pointe les plus extrêmes.</p>
			<ul>
				<li><strong>Le téléphone portable :</strong> Il doit toujours être en "manner mode" (silencieux). Ne téléphonez jamais à l'intérieur d'un train ou d'un bus. Si vous devez absolument répondre, excusez-vous et coupez rapidement, ou déplacez-vous dans les inter-wagons prévus à cet effet dans les Shinkansen.</li>
				<li><strong>Les files d'attente :</strong> On ne gruge jamais. Lignes peintes au sol, barrières : suivez toujours la file. Laissez descendre les passagers avant de monter.</li>
				<li><strong>Manger et boire :</strong> Il est proscrit de manger dans les métros et bus de banlieue. La règle s'assouplit dans les trains longue distance (Shinkansen) équipés de tablettes où déguster un "ekiben" (bento de gare) est même une tradition.</li>
				<li><strong>Sacs à dos :</strong> Dans un train bondé, retirez votre sac à dos et portez-le à la main ou posez-le sur les porte-bagages au-dessus de votre tête pour libérer de l'espace.</li>
			</ul>

			<h2>2. Dans la rue et l'espace public</h2>
			<ul>
				<li><strong>Manger en marchant :</strong> Contrairement à l'Occident, on ne mange pas et on ne boit pas en marchant. Si vous achetez une boisson à un distributeur, buvez-la à côté de la machine, puis jetez la canette dans la poubelle dédiée juste à côté. Pour la street-food, mangez sur le stand ou dans l'espace délimité.</li>
				<li><strong>Les poubelles :</strong> Vous remarquerez très vite l'absence cruelle de poubelles publiques au Japon, depuis les attentats au gaz sarin des années 90. Pourtant, la rue est immaculée. La règle d'or : vous gardez vos déchets avec vous dans votre sac jusqu'à trouver une poubelle (souvent dans les konbini) ou vous les jetez à votre hôtel le soir. Le tri sélectif y est d'ailleurs très strict.</li>
				<li><strong>Fumer :</strong> Il est interdit de fumer dans la rue en marchant dans la majorité des grandes villes (risque d'amende). Vous devez chercher des zones fumeurs ("Smoking Area") délimitées par des cloisons ou au sol. Ironiquement, de nombreux bars et vieux restaurants autorisent encore la cigarette à l'intérieur.</li>
			</ul>

			<h2>3. Au restaurant et à table</h2>
			<ul>
				<li><strong>Le pourboire :</strong> N'en laissez jamais ! Le service est toujours compris. Laisser un pourboire créera un malaise : le serveur vous courra après dans la rue pensant que vous avez oublié votre monnaie.</li>
				<li><strong>Les baguettes :</strong> C'est ici que se concentrent les erreurs fatales. Ne plantez jamais vos baguettes verticalement dans un bol de riz (cela rappelle les rituels funéraires). Ne passez jamais de nourriture de vos baguettes aux baguettes de quelqu'un d'autre (rituel des cendres lors d'une crémation). Posez-les sur le repose-baguettes (hashioki) ou sur le bord du bol.</li>
				<li><strong>Oshibori :</strong> En vous asseyant, on vous donnera une serviette humide (chaude en hiver, froide en été). Servez-vous en uniquement pour vous nettoyer les mains, jamais le visage ou le cou.</li>
				<li><strong>Boissons :</strong> Au Japon, on ne se sert jamais à boire soi-même (pour l'alcool). Servez vos voisins de table, et attendez qu'ils vous servent en retour. Ne commencez pas à boire avant le traditionnel toast ("Kanpai !").</li>
			</ul>

			<h2>4. L'étiquette de la propreté (Chaussures et Onsen)</h2>
			<ul>
				<li><strong>Retirer ses chaussures :</strong> Vous devrez les enlever à l'entrée (le "genkan") de toutes les maisons, des auberges traditionnelles (ryokan), de la plupart des temples, et même dans les cabines d'essayage des magasins. Portez des chaussettes propres et sans trous. Dans les toilettes de ces lieux, des "chaussons de toilettes" spécifiques vous attendent à la porte. Pensez absolument à les retirer en sortant des WC !</li>
				<li><strong>Les Onsen (bains publics) :</strong> Les règles sont drastiques. On se lave méticuleusement le corps entier sur les petits tabourets avant d'entrer dans le bain (qui ne sert qu'à la relaxation, pas au nettoyage). Le maillot de bain est interdit : la nudité totale est de rigueur. Les tatouages sont encore largement refusés (bien que cela s'assouplisse lentement) car associés à la mafia yakuza.</li>
			</ul>
		`,
  },
  {
    slug: "budget-voyage-japon",
    title: "Budget complet : Combien coûte vraiment un voyage au Japon ?",
    excerpt:
      "Démystifions le mythe du Japon hors de prix. Analyse détaillée des coûts réels : avions, hôtels, nourriture, et comment voyager confortablement sans se ruiner en 2026.",
    category: "Conseils pratiques",
    categoryColor: "text-orange-500",
    readTime: "9 min",
    date: "10 mars 2026",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    content: `
			<p>Le Japon traîne depuis les années 80 la réputation d'être l'un des pays les plus chers du monde. Pourtant, avec la dépréciation spectaculaire du Yen ces dernières années (autour de 160 yens pour 1 euro début 2026) et l'absence presque totale d'inflation interne pendant 30 ans, le Japon est devenu une destination extrêmement abordable pour un voyageur européen. Voici la réalité des coûts.</p>

			<h2>1. Les Billets d'Avion : Le plus gros poste de dépense</h2>
			<p>C'est ici que votre budget prend le plus gros coup. Depuis la guerre en Ukraine et l'impossibilité de survoler la Russie, les vols depuis l'Europe sont plus longs (13 à 15h) et plus chers.</p>
			<ul>
				<li><strong>Vol direct (Air France, JAL, ANA) :</strong> Comptez entre 1 200 € et 1 800 € en classe éco, selon la saison et l'anticipation.</li>
				<li><strong>Vol avec escale (Emirates, Qatar Airways, Finnair) :</strong> Plus long (18-24h), mais les prix gravitent souvent entre 800 € et 1 100 €.</li>
			</ul>
			<p><em>Astuce :</em> Réservez 6 à 8 mois à l'avance et privilégiez un billet multi-destinations (ex: Arrivée Tokyo, Départ Osaka) pour économiser un lourd trajet de retour en train.</p>

			<h2>2. L'Hébergement : Le triomphe du bon rapport qualité-prix</h2>
			<p>Les hôtels japonais sont souvent petits, mais leur propreté et leur niveau d'équipement (toilettes lavantes, pyjamas, articles de toilette à profusion) sont incomparables.</p>
			<ul>
				<li><strong>Petit budget (Auberges de jeunesse, hôtels capsules) :</strong> 25 € à 45 € la nuit.</li>
				<li><strong>Budget moyen (Business Hotels typiques : APA, Toyoko Inn, Super Hotel) :</strong> 60 € à 90 € la nuit pour une chambre double très propre (souvent avec petit déjeuner inclus).</li>
				<li><strong>Budget plaisir (Ryokan traditionnel avec demi-pension) :</strong> À partir de 150 € par personne et par nuit, et cela peut monter à l'infini. À s'offrir au moins une fois (à Hakone ou Miyajima par exemple).</li>
			</ul>

			<h2>3. La Nourriture : Un paradis abordable</h2>
			<p>C'est la plus grande surprise du Japon : manger incroyablement bien coûte infiniment moins cher qu'en France.</p>
			<ul>
				<li><strong>Les Konbini (7-Eleven, Lawson) :</strong> Un bento complet, des onigiri (boulettes de riz) et une boisson vous coûteront moins de 5 €. Qualité excellente pour du sur-le-pouce.</li>
				<li><strong>Restauration rapide japonaise (Yoshinoya, Matsuya, Coco Ichibanya) :</strong> Un bol de riz au bœuf (gyudon) ou un curry japonais chaud et copieux revient à 4 € - 7 €.</li>
				<li><strong>Restaurants classiques (Ramen, Izakaya, Sushi tournants) :</strong> Un excellent bol de ramen coûte entre 6 € et 9 €. Une soirée dans un izakaya (bistrot à tapas japonais) avec plusieurs bières tournera autour de 20 € à 30 €.</li>
				<li><strong>Haute gastronomie :</strong> Un déjeuner Kaiseki ou des sushis haut de gamme coûteront évidemment plus cher, mais l'option "lunch" (menu du midi) dans de très grands restaurants reste très accessible (souvent entre 20 € et 40 € pour des repas stellaires).</li>
			</ul>
			<p><em>Budget quotidien nourriture confortable :</em> 30 € par personne/jour suffisent amplement à bien manger matin, midi et soir sans se priver.</p>

			<h2>4. Transports Locaux et Longue Distance</h2>
			<p>C'est le paradoxe du Japon : les transports urbains ne coûtent rien, mais les trains à grande vitesse (Shinkansen) coûtent très cher.</p>
			<ul>
				<li><strong>Métro / Bus de ville :</strong> Environ 1,50 € à 2 € par trajet. Calculez environ 5 € à 8 € par jour en ville.</li>
				<li><strong>Trajets Shinkansen (Sans JR Pass) :</strong> Un aller simple Tokyo-Kyoto coûte environ 90 € à 100 €.</li>
				<li><strong>Le JR Pass :</strong> Autour de 310 € pour 7 jours. Rentable uniquement si vous multipliez les grands trajets.</li>
			</ul>

			<h2>Estimation Totale : Pour 14 Jours sur place (par personne)</h2>
			<ul>
				<li><strong>Profil "Sac à dos frugal" :</strong> Avion (850€) + Hôtels capsules (450€) + Nourriture konbini/ramen (350€) + Transports locaux/bus de nuit au lieu du train (200€) + Activités (100€) = <strong>~1 950 €</strong></li>
				<li><strong>Profil "Confort classique" :</strong> Avion (1200€) + Business Hotels/1 Ryokan (900€) + Restaurants mixtes (500€) + Transports incluant Shinkansen unitaires (300€) + Activités/Souvenirs (250€) = <strong>~3 150 €</strong></li>
			</ul>
			<p>Le Japon n'est donc plus cette forteresse inabordable. Hors billet d'avion, la vie sur place y est nettement moins chère qu'à Paris, Londres ou New York.</p>
		`,
  },
  {
    slug: "gastronomie-japonaise-incontournable",
    title: "Au-delà des Sushis : Les 10 plats japonais à ne pas rater",
    excerpt:
      "La cuisine japonaise est classée au patrimoine immatériel de l'UNESCO. Oubliez les clichés occidentaux et découvrez les véritables spécialités populaires et réconfortantes du quotidien nippon.",
    category: "Destinations",
    categoryColor: "text-blue-500",
    readTime: "8 min",
    date: "10 janvier 2026",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&q=80",
    content: `
			<p>Si vous pensez que les Japonais mangent des sushis tous les jours, vous faites fausse route. Le sushi reste un plat de fête, de sortie spécifique, ou pris sur le pouce. Le véritable socle de la gastronomie nippone (le <em>Washoku</em>) est infiniment plus varié, cuit, frit, et souvent basé sur des bouillons complexes. Voici les incontournables à tester sur place.</p>

			<h2>1. Les Ramen : La religion nationale</h2>
			<p>Originaire de Chine mais élevé au rang d'art au Japon, le ramen est un grand bol de nouilles baignant dans un bouillon intensely parfumé. Chaque région a sa spécialité :</p>
			<ul>
				<li><strong>Tonkotsu :</strong> (Hakata/Fukuoka) Bouillon épais et laiteux à base d'os de porc bouillis des heures.</li>
				<li><strong>Miso :</strong> (Sapporo/Hokkaido) Bouillon riche au soja fermenté, souvent garni de maïs et de beurre.</li>
				<li><strong>Shoyu :</strong> (Tokyo) Bouillon clair à base de sauce soja, plus léger.</li>
			</ul>
			<p>Un bon ramen se mange vite (slurper bruyamment est poli et aide à refroidir les nouilles) et coûte moins de 10 euros.</p>

			<h2>2. Okonomiyaki : La "pizza" japonaise</h2>
			<p>Plat phare d'Osaka et Hiroshima. C'est une pâte à crêpe salée à base de chou finement haché, dans laquelle on incorpore "ce que l'on veut" (<em>okonomi</em>) : poitrine de porc, fruits de mer, mochi, fromage... Le tout cuit sur une plaque chauffante intégrée à votre table (le <em>teppan</em>), recouvert de sauce brune sucrée-salée, de mayonnaise et de copeaux de bonite séchée (katsuobushi) qui "dansent" sous l'effet de la chaleur.</p>

			<h2>3. Takoyaki : La street food ultime d'Osaka</h2>
			<p>De petites boules de pâte frites renfermant un morceau de poulpe (tako). C'est bouillant, coulant à l'intérieur, et terriblement addictif. À manger impérativement en déambulant dans Dotonbori.</p>

			<h2>4. Tonkatsu : La friture perfectionnée</h2>
			<p>Une épaisse côtelette de porc panée dans du panko (une chapelure japonaise très aérée) et frite à la perfection : croustillante à l'extérieur, juteuse à l'intérieur. Elle est servie avec une montagne de chou râpé, du riz, de la soupe miso et une sauce épaisse aux fruits et légumes.</p>

			<h2>5. Yakitori : Le pilier des soirées Izakaya</h2>
			<p>Des brochettes de poulet cuites sur du charbon de bois (idéalement du <em>binchotan</em>). Tout l'animal y passe : blancs, cuisses, foie, peau croustillante, et même le cartilage. À déguster dans un <em>izakaya</em> (bistrot) en criant pour couvrir le bruit, accompagné d'une grande bière blonde pression ou d'un highball (whisky soda).</p>

			<h2>6. Udon et Soba : L'alternative au Ramen</h2>
			<p>Les <strong>Soba</strong> sont de fines nouilles grises au sarrasin, délicieuses servies froides sur une claie en bambou (zaru soba) en plein été, plongées dans une sauce soja diluée. Les <strong>Udon</strong> sont d'épaisses nouilles de blé blanches, moelleuses et élastiques, servies souvent chaudes dans un bouillon clair de dashi, très réconfortantes.</p>

			<h2>7. Curry Japonais (Kare Raisu)</h2>
			<p>Rien à voir avec le curry indien ou thaï. Le curry japonais est une sauce brune, épaisse, très douce (voire sucrée), servie généreusement sur du riz blanc, avec souvent un tonkatsu posé dessus (Katsu Curry). C'est LE plat réconfort familier numéro un au Japon.</p>

			<h2>8. Shabu-Shabu et Sukiyaki : La convivialité</h2>
			<p>Deux plats de fondue japonaise. Le <em>Shabu-Shabu</em> consiste à plonger quelques secondes des tranches de bœuf marbré extrêmement fines dans un bouillon d'eau bouillante ("shabu shabu" est l'onomatopée du bruit de la viande dans l'eau) puis dans des sauces (sésame ou agrume ponzu). Le <em>Sukiyaki</em> est similaire mais cuit doucement dans une poêle en fonte avec une base très sucrée et salée, puis trempé dans un œuf cru battu avant d'être mangé.</p>
		`,
  },
  {
    slug: "transports-commun-tokyo",
    title: "Survivre au métro de Tokyo : Mode d'emploi et astuces",
    excerpt:
      "Le système ferroviaire le plus dense et complexe au monde n'est pas une jungle si vous comprenez ses trois règles de base. Guide complet pour ne plus jamais se perdre à Shinjuku.",
    category: "Conseils pratiques",
    categoryColor: "text-orange-500",
    readTime: "7 min",
    date: "02 février 2026",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=80",
    content: `
			<p>La première fois que l'on regarde un plan complet des transports de Tokyo, cela ressemble à un plat de spaghettis de toutes les couleurs explosé sur un mur. Avec près de 40 millions de passagers quotidiens, des gares grandes comme de petites villes et une douzaine de compagnies privées concurrentes, le réseau tokyoïte est légendaire. Pourtant, grâce à une signalétique redoutablement efficace, il est très facile de s'y retrouver avec quelques clés de compréhension.</p>

			<h2>1. Comprendre qui fait quoi : JR vs Tokyo Metro vs Toei</h2>
			<p>Le plus grand secret de Tokyo est que le réseau n'est pas unifié. Trois acteurs majeurs se partagent la ville :</p>
			<ul>
				<li><strong>JR East (Japan Railways) :</strong> Ce n'est pas du métro, mais des trains de surface qui traversent et entourent la ville. La plus célèbre est la ligne <strong>Yamanote</strong> (la boucle verte) qui dessert les quartiers hyper-centraux (Shinjuku, Shibuya, Tokyo, Ueno, Akihabara).</li>
				<li><strong>Tokyo Metro (9 lignes) :</strong> C'est le réseau de métro souterrain historique et le plus vaste.</li>
				<li><strong>Toei Subway (4 lignes) :</strong> Le réseau géré par le gouvernement métropolitain de Tokyo.</li>
			</ul>
			<p><em>La conséquence majeure :</em> Passer d'une ligne de Tokyo Metro à une ligne JR signifie sortir des portiques de l'une pour entrer dans les portiques de l'autre. Le tarif est combiné. C'est pourquoi utiliser une carte IC (Suica/Pasmo) est VITAL pour ne pas avoir à racheter un billet en papier à chaque changement d'opérateur.</p>

			<h2>2. Google Maps est votre Dieu</h2>
			<p>Oubliez les plans papier. Google Maps est intégré à la perfection avec les bases de données ferroviaires japonaises. Il vous dira non seulement quelle ligne prendre et à quelle heure exacte (les trains japonais sont à la seconde près), mais surtout :</p>
			<ul>
				<li>Dans quelle voiture monter pour être le plus proche des escalators à votre arrivée.</li>
				<li>Le prix précis du trajet.</li>
				<li>Si le train est "Local" (s'arrête partout), "Rapid" (saute des gares) ou "Express".</li>
			</ul>
			<p>Lisez bien les panneaux lumineux sur les quais : monter dans un "Commuter Express" par erreur peut vous emmener en grande banlieue sans vous arrêter à votre destination !</p>

			<h2>3. La signalétique alphabétique</h2>
			<p>Vous n'avez pas besoin de savoir lire les kanjis. Chaque ligne possède une lettre, une couleur, et chaque station un numéro.</p>
			<p>Par exemple, si vous cherchez Shinjuku sur la ligne Marunouchi (rouge). La ligne Marunouchi est "M". Shinjuku est la 8ème station. Vous cherchez le cercle rouge avec <strong>M08</strong> écrit dedans. Il suffit de suivre les immenses cercles rouges au sol ou au plafond dans les couloirs de correspondance.</p>

			<h2>4. Le Boss Final : La Gare de Shinjuku</h2>
			<p>Certifiée par le Guinness des records comme la gare la plus fréquentée au monde (3,5 millions de passagers par jour), Shinjuku compte plus de 200 sorties. Se perdre est une garantie, acceptez-le.</p>
			<ul>
				<li><strong>L'astuce de survie absolue :</strong> Ne cherchez jamais votre sortie finale pendant que vous êtes sur le quai ou dans les dédales souterrains. Suivez aveuglément les panneaux jaunes indiquant la sortie la plus proche (East Exit, West Exit, South Exit). Une fois sorti à la surface, repérez-vous avec votre GPS pour finir le trajet à pied. Tenter de trouver la sortie souterraine précise "B14" relève de l'exploration spéléologique.</li>
			</ul>

			<h2>5. L'heure de pointe et les Wagons "Women Only"</h2>
			<p>Évitez à tout prix de voyager entre 7h30 et 9h00 du matin sur les artères principales (lignes Yamanote, Chuo, Saikyo). Les "pousseurs" en gants blancs existent vraiment pour tasser les voyageurs. Si vous voyagez avec des valises, c'est un enfer physique garanti.</p>
			<p>Aux heures de pointe le matin et parfois le soir, les premiers ou derniers wagons (souvent signalés par des panneaux roses sur le quai) sont réservés aux femmes. C'est une mesure pour lutter contre les "chikan" (attouchements). Les hommes touristes montant dedans par inadvertance se feront poliment (mais fermement) signifier de sortir à la prochaine station.</p>
		`,
  },
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function searchArticles(query: string, list: Article[]): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.slug.toLowerCase().includes(q),
  );
}

export function getRelatedArticles(slug: string, limit = 2): Article[] {
  const current = getArticle(slug);
  if (!current) return [];
  const others = articles.filter((a) => a.slug !== slug);
  const sameCat = others.filter((a) => a.category === current.category);
  const diffCat = others.filter((a) => a.category !== current.category);
  return [...sameCat, ...diffCat].slice(0, limit);
}
