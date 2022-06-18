import memorial_martyr from './images/places/memorial_martyr.jpg'
import beaux_arts from './images/places/beaux_arts.jpg'
import jardin_dessai from './images/places/jardin_dessai.jpg'
import ketchaoua from './images/places/ketchaoua.jpg'
import musee_ruines from './images/places/musee_ruines.jpg'
import notre_dame from './images/places/beaux_arts.jpg'
import park_farouk_land from './images/places/park_farouk_land.jpg'
import plage_seraidi from './images/places/plage_seraidi.jpg'
import rais from './images/places/rais.jpeg'
import saint_augustin from './images/places/saint_augustin.jpg'
import salle_atlas from './images/places/plage_seraidi.jpg'
import zaouia_sidi_brahim from './images/places/zaouia_sidi_brahim.jpg'

export default [
  {
    zone: "algiers",
    nom: "Mémorial du martyr",
    category: "Monument",
    theme: "Historique",
    description: "Le mémorial du Martyr, sanctuaire du Martyr ou Maqam Echahid est un monument aux morts surplombant la ville d'Alger, érigé en 1982 à l'occasion du 20ᵉ anniversaire de l'indépendance de l'Algérie, en mémoire des chahids, les combattants de la guerre d'indépendance algérienne morts pour la libération du pays",
    time: "24/24 h",
    means: "Téléphérique EL Madaniya ligne (Hamma_Diar EL mahsoul)\nBus Etusa(Ruisseau_Saada)",
    coordinates: {
      lat: 36.74575344099775,
      lng: 3.0697453116994997,
    },
    image: memorial_martyr,
    rating:3,
  },
  {
    zone: "algiers",
    nom: "La basilique Notre-Dame-d'Afrique",
    category: "Eglise",
    theme: "Spirituel",
    description: "La basilique Notre-Dame-d'Afrique est l'une des basiliques mineures de l'Église catholique. Elle est située dans la commune de Bologhine, à l'ouest d'Alger, sur un promontoire dominant la mer de 124 m d'altitude. Elle a été construite par l'architecte Jean-Eugène Fromageau dans le style romano-byzantin, et consacrée le 2 juillet 1872. L'extérieur est caractérisé par un haut dôme, fixé sur un tambour cylindrique. Cette basilique a la particularité d'avoir l'abside au sud-ouest, plutôt qu'à l'est comme d'habitude.",
    time: "11:00 – 12:30, 15:00 – 17:30",
    means: "Téléphérique zeghara ligne (Beb EL oued-zeghara)  Bus(Beb el oued-zeghara)",
    coordinates: {
      lat: 36.80103786042073,
      lng: 3.042636798208906,
    },
    image: notre_dame,
    rating:3,
  },
  {
    zone: "algiers",
    nom: "Jardin d'essais",
    category: "Jardin",
    theme: "Nature",
    description: "Le jardin d'essai du Hamma, situé dans le quartier du Hamma à Alger, est un jardin luxuriant, qui s'étend en amphithéâtre, au pied du musée national des Beaux-Arts, de la rue Mohamed-Belouizdad à la rue Hassiba-Ben-Bouali, sur une superficie de 32 hectares. Créé en 1832, il est considéré comme l'un des jardins d'essai et d'acclimatation les plus importants au monde. L'aile ouest du jardin est occupée par le jardin français, bordé de washingtonias. Il est séparé de l'ancien jardin situé plus à l'est par l'allée des platanes, perpendiculaire à la route comme l'allée des dragonniers et l'allée des ficus, coupées elles-mêmes de nombreuses allées parallèles à la route dont les deux principales sont l'allée des bambous et l'allée des palmiers. Une allée circulaire au sud-est, l'allée des cocos, contourne le jardin anglais doté d'un petit lac avec plantes aquatiques.",
    time: "10-18h",
    means: "metro jardin d'essai (places des martyrs-herrach)  bus Etusa (1mai)",
    coordinates: {
      lat: 36.74859340711661,
      lng: 3.075831642388499,
    },
    image: jardin_dessai
    ,
    rating:4,
  },
  {
    zone: "algiers",
    nom: "Palais des Raïs",
    category: "Musée",
    theme: "Historique",
    description: "Le Palais des Raïs aussi appelé Bastion 23 est un ensemble de trois palais, ainsi que de six maisons des pêcheurs, datant tous de l'époque ottomane. Le Palais des Raïs fait partie des plus importants monuments historiques de la ville d’Alger. Il représente, par ailleurs, l’un des derniers témoins qui attestent physiquement du prolongement de la Casbah d’Alger vers la mer jusqu'au XIXᵉ siècle",
    time: "08:00 – 17:00  vendredi fermé",
    means: "metro place des martyrs Bus sahat chohada",
    coordinates: {
      lat: 36.78887735888596,
      lng: 3.0637111650874584,
    },
    image: rais,
    rating:3,
  },
  {
    zone: "algiers",
    nom: "Musée des beaux arts",
    category: "Musée",
    theme: "Culturel",
    description: "Le musée national des Beaux-Arts d'Alger, est l’un des plus grands musées d’art d'Afrique. Ouvert au public depuis le 5 mai 1930, il est situé dans le quartier du Hamma, du côté du jardin d'essai du HAMMA",
    time: "vendredi fermé jeudi 9h-17h reste des jours 9h-18h",
    means: "Metro jardin d'essai (places des martyrs-herrach)\nBus Etusa (1mai)",
    coordinates: {
      lat: 36.74600171640968,
      lng: 3.072270782863357,
    },
    image: beaux_arts
  },
  {
    zone: "algiers",
    nom: "Salle Atlas",
    category: "Cinéma",
    theme: "Culturel",
    description: "Cinéma Atlas est une salle de cinéma. Lieu : Algérie. Cinéma Atlas est située à proximité de EL-KETTANI",
    time: "9h-16h",
    means: "Metro place des martyrs\nBus KITANI",
    coordinates: {
      lat: 36.79132957969911,
      lng: 3.059466266402319,
    },
    image: salle_atlas,
    rating:4,
  },
  {
    zone: "algiers",
    nom: "Mosqué Katchawa",
    category: "Mosqué",
    theme: "Spirituel",
    description: "La mosquée Ketchaoua est une mosquée historique faisant partie du patrimoine classé de la basse casbah d'Alger. Construite en 1436, elle aurait été massivement remaniée au XVIIIᵉ siècle sous le gouvernement du dey Hassan.",
    time: "24/24h",
    means: "Metro place des martyrs bus sahat chohada",
    coordinates: {
      lat: 36.785065957730616,
      lng: 3.0607867405363596,
    },
    image: ketchaoua
    ,
    rating:3,
  },
  {
    zone: "annaba",
    nom: "Basilique « Saint Augustin »",
    category: "Eglise",
    theme: "Speriturel",
    description: "La basilique Saint-Augustin est une basilique catholique située dans la ville d'Annaba, en Algérie, et dédiée à saint Augustin évêque de la ville de 396 jusqu'à sa mort en 430. Elle est la Pro-cathédrale du diocèse de Constantine-Hippone.",
    time: "dimanche\t11:00–11:30, 14:30–16:30\nlundi\t09:00–11:30, 14:30–16:30\nmardi\t09:00–11:30, 14:30–16:30\nmercredi\t09:00–11:30, 14:30–16:30\njeudi\t09:00–11:30, 14:30–16:30\nvendredi\t14:30–16:30\nsamedi\t09:00–11:30, 14:30–16:30",
    means: "Bus: 11, 24, 602, 701, 702, 9.\n    Train: R41 D, R42A.\n    Tram: A.",
    coordinates: {
      lat: 36.88219631187934,
      lng: 7.744769027882933,
    },
    image: saint_augustin,
    rating:4,
  },
  {
    zone: "annaba",
    nom: "Plage Seraïdi",
    category: "Plage",
    theme: "Nature",
    description: "De Seraïdi, à plus de 900 mètres d’altitude, le centre-ville d’Annaba parait minuscule. De là, on peut percevoir la plage Oued Boukrat, l’une des plus belles de la région. Ici, les grosses chaleurs n’ont pas droit au chapitre. De la fraicheur,  rien que de la fraicheur…",
    time: "24/24h",
    means: "Bus Seraidi",
    coordinates: {
      lat: 36.99938293138988,
      lng: 7.5578757781351085,
    },
    image: plage_seraidi,
    rating:4,
  },
  {
    zone: "annaba",
    nom: "Zawia brahim",
    category: "Mosqué",
    theme: "Spirituel",
    description: "",
    time: "Toujours ouvert",
    means: "",
    coordinates: {
      lat: 36.88453451571321,
      lng: 7.729980139245787,
    },
    image: zaouia_sidi_brahim,
    rating:3,
  },
  {
    zone: "annaba",
    nom: "Parc Farouk Land",
    category: "Parc",
    theme: "Divertissement",
    description: "Attractions colorées parmi lesquelles une grande roue, des montagnes russes, un petit train et des jeux pour tous les âges.\nParc d'attraction، Rte de Sidi Achour, Annaba 23000",
    time: "14h-22h tjr",
    means: "Bus sidi achour",
    coordinates: {
      lat: 36.87381606740498,
      lng: 7.714826911701939,
    },
    image: park_farouk_land,
    rating:4,
  },
  {
    zone: "annaba",
    nom: "Musée des Ruines d'Hyppone",
    category: "Musée",
    theme: "Historique",
    description: "Le musée d'Hippone est un musée à Annaba en Algérie, qui présente le passé de la ville de la préhistoire, aux périodes numide, romaine, hafside, ottomane et coloniale ainsi que des vestiges du site archéologique d'Hippone. Erigé en 1968, le musée d'Hippone est d’une grande richesse historique, il présente une collection de pièces relatifs à la vie civile et religieuse trouvées lors des fouilles dans le site archéologique d'Hippone, ainsi que des pièces anciennes trouvées dans d'autres sites archéologiques proches de la wilaya d'Annaba.",
    time: "8h-18h",
    means: "",
    coordinates: {
      lat: 36.88209712502966,
      lng: 7.751915994435119,
    },
    image: musee_ruines,
    rating:3,
  }
]