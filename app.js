const STORAGE_KEYS = {
  pokemon: "gobuddy_pokemon",
  places: "gobuddy_places",
  placeDraft: "gobuddy_place_draft",
  checklist: "gobuddy_checklist",
  reminders: "gobuddy_reminders",
  language: "gobuddy_language"
};

const DAILY_TASKS = [
  "Girar una Pokeparada",
  "Atrapar 10 Pokemon",
  "Abrir/cerrar regalos",
  "Completar investigacion de campo"
];

const WEEKLY_TASKS = [
  "Raid con amigos",
  "Intercambiar Pokemon",
  "Revisar caja y transferir",
  "Plan de comunidad/evento"
];

const POWER_UP_TABLE = [
  { min: 1, max: 2.5, dust: 200, candy: 1 },
  { min: 3, max: 4.5, dust: 400, candy: 1 },
  { min: 5, max: 6.5, dust: 600, candy: 1 },
  { min: 7, max: 8.5, dust: 800, candy: 1 },
  { min: 9, max: 10.5, dust: 1000, candy: 1 },
  { min: 11, max: 12.5, dust: 1300, candy: 2 },
  { min: 13, max: 14.5, dust: 1600, candy: 2 },
  { min: 15, max: 16.5, dust: 1900, candy: 2 },
  { min: 17, max: 18.5, dust: 2200, candy: 2 },
  { min: 19, max: 20.5, dust: 2500, candy: 2 },
  { min: 21, max: 22.5, dust: 3000, candy: 3 },
  { min: 23, max: 24.5, dust: 3500, candy: 3 },
  { min: 25, max: 26.5, dust: 4000, candy: 4 },
  { min: 27, max: 28.5, dust: 4500, candy: 4 },
  { min: 29, max: 30.5, dust: 5000, candy: 4 },
  { min: 31, max: 32.5, dust: 6000, candy: 6 },
  { min: 33, max: 34.5, dust: 7000, candy: 8 },
  { min: 35, max: 36.5, dust: 8000, candy: 10 },
  { min: 37, max: 38.5, dust: 9000, candy: 12 },
  { min: 39, max: 40, dust: 10000, candy: 15 }
];


const FAST_MOVES = [
  "Acid", "Air Slash", "Astonish", "Bite", "Bullet Punch", "Bubble", "Bug Bite", "Charge Beam", "Charm", "Confusion",
  "Counter", "Dragon Breath", "Dragon Tail", "Ember", "Extrasensory", "Fairy Wind", "Feint Attack", "Fire Fang", "Frost Breath", "Fury Cutter",
  "Gust", "Hex", "Hidden Power", "Ice Fang", "Incinerate", "Infestation", "Iron Tail", "Karate Chop", "Lick", "Lock-On",
  "Low Kick", "Magical Leaf", "Metal Claw", "Mud Shot", "Mud Slap", "Peck", "Poison Jab", "Poison Sting", "Pound", "Powder Snow",
  "Present", "Psycho Cut", "Quick Attack", "Razor Leaf", "Rock Smash", "Rock Throw", "Rollout", "Scratch", "Shadow Claw", "Smack Down",
  "Snarl", "Spark", "Splash", "Steel Wing", "Struggle Bug", "Sucker Punch", "Take Down", "Tackle", "Thunder Fang", "Thunder Shock",
  "Vine Whip", "Volt Switch", "Waterfall", "Wing Attack", "Yawn", "Zen Headbutt"
];

const CHARGED_MOVES = [
  "Aerial Ace", "Ancient Power", "Aqua Tail", "Aura Sphere", "Avalanche", "Blaze Kick", "Body Slam", "Brave Bird", "Breaking Swipe", "Brick Break",
  "Brutal Swing", "Bug Buzz", "Bulldoze", "Close Combat", "Crunch", "Cross Chop", "Dark Pulse", "Dazzling Gleam", "Dig", "Disarming Voice",
  "Draco Meteor", "Dragon Claw", "Dragon Pulse", "Drill Peck", "Drill Run", "Dynamic Punch", "Earth Power", "Earthquake", "Fire Blast", "Fire Punch",
  "Flame Charge", "Flame Wheel", "Flamethrower", "Flash Cannon", "Focus Blast", "Foul Play", "Frenzy Plant", "Giga Impact", "Grass Knot", "Gyro Ball",
  "Heat Wave", "High Horsepower", "Hydro Cannon", "Hydro Pump", "Hyper Beam", "Ice Beam", "Ice Punch", "Icy Wind", "Leaf Blade", "Leaf Storm",
  "Liquidation", "Low Sweep", "Megahorn", "Meteor Mash", "Moonblast", "Mud Bomb", "Night Slash", "Ominous Wind", "Outrage", "Overheat",
  "Play Rough", "Poison Fang", "Power Gem", "Power-Up Punch", "Psychic", "Psyshock", "Rock Blast", "Rock Slide", "Rock Tomb", "Sacred Sword",
  "Sand Tomb", "Scald", "Scorching Sands", "Seed Bomb", "Shadow Ball", "Shadow Punch", "Signal Beam", "Sludge Bomb", "Sludge Wave", "Solar Beam",
  "Stone Edge", "Surf", "Swift", "Thunder", "Thunder Punch", "Thunderbolt", "Trailblaze", "Tri Attack", "Wild Charge", "X-Scissor", "Zap Cannon"
];

const MOVE_CATALOG = [
  ...FAST_MOVES.map((name) => ({ name, kind: "fast" })),
  ...CHARGED_MOVES.map((name) => ({ name, kind: "charged" }))
];
const $ = (q) => document.querySelector(q);
const $$ = (q) => [...document.querySelectorAll(q)];
let currentLang = "es";

const I18N = {
  es: {
    lang: "Idioma",
    tabs: ["Pokedex", "Calculadora", "IV", "Checklist", "Mapa", "Recordatorios"],
    appSubtitle: "Companion offline para Pokemon GO",
    pokemonTitle: "Tu Pokedex personal",
    pokemonSave: "Guardar Pokemon",
    pokemonSearch: "Buscar por nombre o movimiento",
    pokemonFav: "Solo favoritos",
    movesTitle: "Lista de movimientos",
    savedPokemonTitle: "Pokemones guardados",
    movesSearch: "Buscar movimiento (ej: Avalanche, Shadow Ball)",
    calcTitle: "Calculadora de mejora",
    calcBtn: "Calcular recursos",
    levelTitle: "Estimador de nivel",
    levelHint: "Mira en Pokemon GO el costo de la proxima mejora y cargalo aqui.",
    levelBtn: "Estimar nivel",
    levelResetBtn: "Restablecer",
    checkTitle: "Checklist diario y semanal",
    dailyTitle: "Diario",
    weeklyTitle: "Semanal",
    mapTitle: "Mapa personal (offline)",
    mapHint: "Corregido: Pokestops y Gyms se guardan automaticamente al escribir.",
    geoBtn: "Usar mi ubicacion",
    newPlaceBtn: "Nuevo registro",
    autosaveText: "Guardar automaticamente",
    remindersTitle: "Recordatorios",
    reminderBtn: "Agregar recordatorio",
    footer: "Todo se guarda localmente en tu iPhone.",
    phName: "Nombre (ej: Dragonite)",
    phMoves: "Movimientos",
    phNotes: "Notas",
    phCurrentLevel: "Nivel actual",
    phTargetLevel: "Nivel objetivo",
    phCurrentCp: "CP actual",
    phTargetCp: "CP objetivo",
    phNextDust: "Polvo de la proxima mejora",
    phNextCandy: "Caramelos de la proxima mejora",
    phMoveSearch: "Buscar movimiento (ej: Avalanche, Shadow Ball)",
    phPlaceName: "Nombre del lugar",
    phArea: "Zona/Barrio",
    phEvent: "Evento (ej: Hora destacada)",
    ivCalcTitle: "Calculadora de IV",
    ivCalcHint: "Ingresa Ataque, Defensa y PS (0 a 15) para calcular IV total y porcentaje.",
    ivCalcBtn: "Calcular IV",
    ivResetBtn: "Restablecer",
    phIvAtk: "Ataque IV",
    phIvDef: "Defensa IV",
    phIvSta: "PS IV",
    ivResultTitle: "Resultado IV",
    ivStatsLabel: "ATK/DEF/PS",
    ivTotalLabel: "IV total",
    ivPercentLabel: "Porcentaje",
    ivTierPerfect: "Excelente",
    ivTierGreat: "Muy bueno",
    ivTierGood: "Medio",
    ivTierLow: "Bajo",
    moveKindFast: "Rapido",
    moveKindCharged: "Cargado",
    moveKindDex: "Tu Pokedex",
    moveCount: "{shown} de {total} movimientos",
    moveNoResults: "No hay movimientos con ese filtro.",
    movePickHint: "Toca un movimiento para agregarlo o quitarlo del campo Movimientos.",
    moveSelectTitle: "Tocar para seleccionar",
    moveUnselectTitle: "Tocar para quitar",
    noMovesSaved: "sin movimientos",
    favBtn: "Favorito",
    unfavBtn: "Quitar fav",
    deleteBtn: "Borrar"
  },
  en: {
    lang: "Language",
    tabs: ["Pokedex", "Calculator", "IV", "Checklist", "Map", "Reminders"],
    appSubtitle: "Offline companion for Pokemon GO",
    pokemonTitle: "Your personal Pokedex",
    pokemonSave: "Save Pokemon",
    pokemonSearch: "Search by name or move",
    pokemonFav: "Favorites only",
    movesTitle: "Move list",
    savedPokemonTitle: "Saved Pokemon",
    movesSearch: "Search move (e.g. Avalanche, Shadow Ball)",
    calcTitle: "Power-up calculator",
    calcBtn: "Calculate resources",
    levelTitle: "Level estimator",
    levelHint: "Check the next power-up cost in Pokemon GO and enter it here.",
    levelBtn: "Estimate level",
    levelResetBtn: "Reset",
    checkTitle: "Daily and weekly checklist",
    dailyTitle: "Daily",
    weeklyTitle: "Weekly",
    mapTitle: "Personal map (offline)",
    mapHint: "Fixed: PokeStops and Gyms save automatically while typing.",
    geoBtn: "Use my location",
    newPlaceBtn: "New entry",
    autosaveText: "Save automatically",
    remindersTitle: "Reminders",
    reminderBtn: "Add reminder",
    footer: "Everything is saved locally on your iPhone.",
    phName: "Name (e.g. Dragonite)",
    phMoves: "Moves",
    phNotes: "Notes",
    phCurrentLevel: "Current level",
    phTargetLevel: "Target level",
    phCurrentCp: "Current CP",
    phTargetCp: "Target CP",
    phNextDust: "Next power-up stardust",
    phNextCandy: "Next power-up candies",
    phMoveSearch: "Search move (e.g. Avalanche, Shadow Ball)",
    phPlaceName: "Place name",
    phArea: "Area/Neighborhood",
    phEvent: "Event (e.g. Spotlight Hour)",
    ivCalcTitle: "IV Calculator",
    ivCalcHint: "Enter Attack, Defense, and HP (0 to 15) to calculate total IV and percentage.",
    ivCalcBtn: "Calculate IV",
    ivResetBtn: "Reset",
    phIvAtk: "Attack IV",
    phIvDef: "Defense IV",
    phIvSta: "HP IV",
    ivResultTitle: "IV Result",
    ivStatsLabel: "ATK/DEF/HP",
    ivTotalLabel: "Total IV",
    ivPercentLabel: "Percentage",
    ivTierPerfect: "Excellent",
    ivTierGreat: "Great",
    ivTierGood: "Medium",
    ivTierLow: "Low",
    moveKindFast: "Fast",
    moveKindCharged: "Charged",
    moveKindDex: "Your Pokedex",
    moveCount: "{shown} of {total} moves",
    moveNoResults: "No moves match that filter.",
    movePickHint: "Tap a move to add or remove it from the Moves field.",
    moveSelectTitle: "Tap to select",
    moveUnselectTitle: "Tap to remove",
    noMovesSaved: "no moves",
    favBtn: "Favorite",
    unfavBtn: "Unfavorite",
    deleteBtn: "Delete"
  },
  fr: {
    lang: "Langue",
    tabs: ["Pokedex", "Calcul", "IV", "Checklist", "Carte", "Rappels"],
    appSubtitle: "Compagnon hors ligne pour Pokemon GO",
    pokemonTitle: "Ton Pokedex personnel",
    pokemonSave: "Enregistrer Pokemon",
    pokemonSearch: "Chercher par nom ou mouvement",
    pokemonFav: "Favoris seulement",
    movesTitle: "Liste des mouvements",
    savedPokemonTitle: "Pokemon sauvegardes",
    movesSearch: "Chercher un mouvement (ex: Avalanche, Shadow Ball)",
    calcTitle: "Calculateur d'amelioration",
    calcBtn: "Calculer les ressources",
    levelTitle: "Estimateur de niveau",
    levelHint: "Regarde le cout de la prochaine amelioration dans Pokemon GO et saisis-le ici.",
    levelBtn: "Estimer niveau",
    levelResetBtn: "Reinitialiser",
    checkTitle: "Checklist quotidienne et hebdomadaire",
    dailyTitle: "Quotidien",
    weeklyTitle: "Hebdomadaire",
    mapTitle: "Carte personnelle (hors ligne)",
    mapHint: "Corrige: PokeStops et Gyms se sauvegardent automatiquement.",
    geoBtn: "Utiliser ma position",
    newPlaceBtn: "Nouvelle entree",
    autosaveText: "Sauvegarder automatiquement",
    remindersTitle: "Rappels",
    reminderBtn: "Ajouter rappel",
    footer: "Tout est stocke localement sur ton iPhone.",
    phName: "Nom (ex: Dragonite)",
    phMoves: "Mouvements",
    phNotes: "Notes",
    phCurrentLevel: "Niveau actuel",
    phTargetLevel: "Niveau cible",
    phCurrentCp: "PC actuel",
    phTargetCp: "PC cible",
    phNextDust: "Poussiere prochaine amelioration",
    phNextCandy: "Bonbons prochaine amelioration",
    phMoveSearch: "Chercher un mouvement (ex: Avalanche, Shadow Ball)",
    phPlaceName: "Nom du lieu",
    phArea: "Zone/Quartier",
    phEvent: "Evenement (ex: Spotlight Hour)",
    ivCalcTitle: "Calculateur d'IV",
    ivCalcHint: "Entre Attaque, Defense et PV (0 a 15) pour calculer IV total et pourcentage.",
    ivCalcBtn: "Calculer IV",
    ivResetBtn: "Reinitialiser",
    phIvAtk: "IV Attaque",
    phIvDef: "IV Defense",
    phIvSta: "IV PV",
    ivResultTitle: "Resultat IV",
    ivStatsLabel: "ATK/DEF/PV",
    ivTotalLabel: "IV total",
    ivPercentLabel: "Pourcentage",
    ivTierPerfect: "Excellent",
    ivTierGreat: "Tres bon",
    ivTierGood: "Moyen",
    ivTierLow: "Faible",
    moveKindFast: "Rapide",
    moveKindCharged: "Charge",
    moveKindDex: "Ton Pokedex",
    moveCount: "{shown} sur {total} mouvements",
    moveNoResults: "Aucun mouvement avec ce filtre.",
    movePickHint: "Touchez un mouvement pour l'ajouter ou le retirer du champ Mouvements.",
    moveSelectTitle: "Touchez pour selectionner",
    moveUnselectTitle: "Touchez pour retirer",
    noMovesSaved: "sans mouvements",
    favBtn: "Favori",
    unfavBtn: "Retirer favori",
    deleteBtn: "Supprimer"
  }
};

function tr(key) {
  const dict = I18N[currentLang] || I18N.es;
  return dict[key] ?? I18N.es[key] ?? "";
}

const MOVE_TRANSLATION_RULES = {
  es: [
    ["Power-Up Punch", "Punio Potenciador"],
    ["Lock-On", "Fijar Blanco"],
    ["X-Scissor", "Tijera X"],
    ["Thunderbolt", "Rayo"],
    ["Headbutt", "Cabezazo"],
    ["Earthquake", "Terremoto"],
    ["Flamethrower", "Lanzallamas"],
    ["Psyshock", "Psicocarga"],
    ["Acid", "Acido"],
    ["Aerial", "Aereo"], ["Air", "Aereo"], ["Ancient", "Antiguo"], ["Aqua", "Agua"],
    ["Astonish", "Asombro"], ["Attack", "Ataque"], ["Avalanche", "Avalancha"], ["Ball", "Bola"],
    ["Beam", "Rayo"], ["Bird", "Pajaro"], ["Bite", "Mordisco"], ["Blade", "Hoja"], ["Blast", "Explosivo"],
    ["Blaze", "Llama"], ["Body", "Cuerpo"], ["Bomb", "Bomba"], ["Brave", "Valiente"], ["Break", "Ruptura"],
    ["Breaking", "Quebrador"], ["Breath", "Aliento"], ["Brick", "Ladrillo"], ["Bubble", "Burbuja"],
    ["Bug", "Bicho"], ["Bulldoze", "Demolicion"], ["Bullet", "Bala"], ["Buzz", "Zumbido"], ["Cannon", "Canon"],
    ["Charge", "Carga"], ["Charm", "Encanto"], ["Chop", "Tajo"], ["Claw", "Garra"], ["Close", "Cercano"],
    ["Combat", "Combate"], ["Confusion", "Confusion"], ["Counter", "Contraataque"], ["Crunch", "Triturar"],
    ["Cut", "Corte"], ["Cutter", "Cortador"], ["Dark", "Siniestro"], ["Dazzling", "Deslumbrante"],
    ["Dig", "Excavar"], ["Disarming", "Desarme"], ["Down", "Caida"], ["Dragon", "Dragon"], ["Drill", "Taladro"],
    ["Dynamic", "Dinamico"], ["Earth", "Tierra"], ["Edge", "Filo"], ["Ember", "Ascuas"],
    ["Extrasensory", "Paranormal"], ["Fairy", "Hada"], ["Fang", "Colmillo"], ["Feint", "Finta"],
    ["Fire", "Fuego"], ["Flame", "Llama"], ["Flash", "Destello"], ["Focus", "Foco"], ["Foul", "Sucio"],
    ["Frenzy", "Frenesi"], ["Frost", "Escarcha"], ["Fury", "Furia"], ["Gem", "Gema"], ["Gleam", "Resplandor"],
    ["Grass", "Hierba"], ["Gust", "Rafaga"], ["Gyro", "Giro"], ["Heat", "Calor"], ["Hex", "Hechizo"],
    ["Hidden", "Oculto"], ["High", "Alto"], ["Horsepower", "Potencia"], ["Hydro", "Hidro"], ["Hyper", "Hiper"],
    ["Ice", "Hielo"], ["Icy", "Helado"], ["Incinerate", "Incinerar"], ["Infestation", "Infestacion"],
    ["Iron", "Hierro"], ["Jab", "Golpe"], ["Kick", "Patada"], ["Knot", "Nudo"], ["Leaf", "Hoja"],
    ["Lick", "Lenguetazo"], ["Liquidation", "Licuacion"], ["Low", "Bajo"], ["Magical", "Magico"],
    ["Mash", "Machaque"], ["Meteor", "Meteoro"], ["Moon", "Lunar"], ["Mud", "Lodo"], ["Night", "Noche"],
    ["Ominous", "Ominoso"], ["Outrage", "Enfado"], ["Overheat", "Sofoco"], ["Peck", "Picotazo"],
    ["Play", "Juego"], ["Poison", "Veneno"], ["Pound", "Golpe"], ["Powder", "Polvo"], ["Power", "Poder"],
    ["Present", "Presente"], ["Psychic", "Psiquico"], ["Psycho", "Psico"], ["Pulse", "Pulso"],
    ["Pump", "Bomba"], ["Punch", "Punio"], ["Quick", "Rapido"], ["Razor", "Afilado"], ["Rock", "Roca"],
    ["Rollout", "Rodar"], ["Rough", "Rudo"], ["Run", "Carrera"], ["Sacred", "Sagrado"], ["Sand", "Arena"],
    ["Sands", "Arenas"], ["Scald", "Escaldar"], ["Scorching", "Abrasador"], ["Scratch", "Aranazo"],
    ["Seed", "Semilla"], ["Shadow", "Sombra"], ["Shock", "Choque"], ["Shot", "Disparo"], ["Signal", "Senal"],
    ["Slam", "Portazo"], ["Slap", "Bofeton"], ["Slash", "Tajo"], ["Slide", "Deslizamiento"],
    ["Sludge", "Lodo"], ["Smack", "Golpe"], ["Smash", "Romper"], ["Snarl", "Alarido"], ["Snow", "Nieve"],
    ["Solar", "Solar"], ["Spark", "Chispa"], ["Sphere", "Esfera"], ["Splash", "Salpicadura"], ["Steel", "Acero"],
    ["Sting", "Picadura"], ["Stone", "Piedra"], ["Storm", "Tormenta"], ["Struggle", "Forcejeo"],
    ["Sucker", "Sorpresa"], ["Surf", "Surf"], ["Sweep", "Barrido"], ["Swift", "Rapidez"], ["Swing", "Balanceo"],
    ["Swipe", "Desliz"], ["Switch", "Cambio"], ["Sword", "Espada"], ["Tackle", "Placaje"], ["Tail", "Cola"],
    ["Take", "Derribo"], ["Throw", "Lanzamiento"], ["Thunder", "Trueno"], ["Tomb", "Tumba"],
    ["Trailblaze", "Abrecaminos"], ["Tri", "Tri"], ["Vine", "Liana"], ["Voice", "Voz"], ["Volt", "Voltio"],
    ["Waterfall", "Cascada"], ["Wave", "Ola"], ["Wheel", "Rueda"], ["Whip", "Latigo"], ["Wild", "Salvaje"],
    ["Wind", "Viento"], ["Wing", "Ala"], ["Yawn", "Bostezo"], ["Zap", "Chispazo"]
  ],
  fr: [
    ["Power-Up Punch", "Poing Boost"],
    ["Lock-On", "Verrouillage"],
    ["X-Scissor", "Plaie-Croix"],
    ["Thunderbolt", "Eclair"],
    ["Headbutt", "Coup d'Tete"],
    ["Earthquake", "Seisme"],
    ["Flamethrower", "Lance-Flammes"],
    ["Psyshock", "Choc Psy"],
    ["Acid", "Acide"],
    ["Aerial", "Aerien"], ["Air", "Air"], ["Ancient", "Ancien"], ["Aqua", "Aqua"], ["Attack", "Attaque"],
    ["Avalanche", "Avalanche"], ["Ball", "Balle"], ["Beam", "Rayon"], ["Bird", "Oiseau"], ["Bite", "Morsure"],
    ["Blade", "Lame"], ["Blast", "Explosion"], ["Blaze", "Flamme"], ["Body", "Corps"], ["Bomb", "Bombe"],
    ["Brave", "Brave"], ["Break", "Casse"], ["Breaking", "Brisant"], ["Breath", "Souffle"], ["Brick", "Brique"],
    ["Bubble", "Bulle"], ["Bug", "Insecte"], ["Bulldoze", "Bulldozer"], ["Bullet", "Balle"], ["Buzz", "Bourdonnement"],
    ["Cannon", "Canon"], ["Charge", "Charge"], ["Charm", "Charme"], ["Chop", "Tranche"], ["Claw", "Griffe"],
    ["Close", "Rapproche"], ["Combat", "Combat"], ["Confusion", "Confusion"], ["Counter", "Riposte"],
    ["Crunch", "Machouille"], ["Cut", "Coupe"], ["Cutter", "Coupeur"], ["Dark", "Tenebres"], ["Dazzling", "Eblouissant"],
    ["Dig", "Tunnel"], ["Disarming", "Desarmant"], ["Down", "Chute"], ["Dragon", "Dragon"], ["Drill", "Foret"],
    ["Dynamic", "Dynamique"], ["Earth", "Terre"], ["Edge", "Tranchant"], ["Ember", "Flammeche"],
    ["Extrasensory", "Extrasenseur"], ["Fairy", "Fee"], ["Fang", "Croc"], ["Feint", "Feinte"], ["Fire", "Feu"],
    ["Flame", "Flamme"], ["Flash", "Flash"], ["Focus", "Focus"], ["Foul", "Deloyal"], ["Frenzy", "Frenesie"],
    ["Frost", "Givre"], ["Fury", "Furie"], ["Gem", "Gemme"], ["Gleam", "Lueur"], ["Grass", "Herbe"],
    ["Gust", "Bourrasque"], ["Gyro", "Gyro"], ["Heat", "Chaleur"], ["Hex", "Malefice"], ["Hidden", "Cache"],
    ["High", "Haut"], ["Horsepower", "Puissance"], ["Hydro", "Hydro"], ["Hyper", "Hyper"], ["Ice", "Glace"],
    ["Icy", "Glacial"], ["Incinerate", "Incinere"], ["Infestation", "Infestation"], ["Iron", "Fer"], ["Jab", "Pique"],
    ["Kick", "Pied"], ["Knot", "Noeud"], ["Leaf", "Feuille"], ["Lick", "Lechouille"], ["Liquidation", "Liquide"],
    ["Low", "Bas"], ["Magical", "Magique"], ["Mash", "Poing"], ["Meteor", "Meteore"], ["Moon", "Lune"],
    ["Mud", "Boue"], ["Night", "Nuit"], ["Ominous", "Funeste"], ["Outrage", "Colere"], ["Overheat", "Surchauffe"],
    ["Peck", "Picpic"], ["Play", "Jeu"], ["Poison", "Poison"], ["Pound", "Ecrasement"], ["Powder", "Poudre"],
    ["Power", "Pouvoir"], ["Present", "Cadeau"], ["Psychic", "Psy"], ["Psycho", "Psy"], ["Pulse", "Pulse"],
    ["Pump", "Pompe"], ["Punch", "Poing"], ["Quick", "Rapide"], ["Razor", "Tranch"], ["Rock", "Roche"],
    ["Rollout", "Roulade"], ["Rough", "Rugueux"], ["Run", "Course"], ["Sacred", "Sacre"], ["Sand", "Sable"],
    ["Sands", "Sables"], ["Scald", "Ebullition"], ["Scorching", "Brulant"], ["Scratch", "Griffe"], ["Seed", "Graine"],
    ["Shadow", "Ombre"], ["Shock", "Choc"], ["Shot", "Tir"], ["Signal", "Signal"], ["Slam", "Plaquage"],
    ["Slap", "Claque"], ["Slash", "Tranche"], ["Slide", "Glissade"], ["Sludge", "Boue"], ["Smack", "Frappe"],
    ["Smash", "Fracasse"], ["Snarl", "Grogne"], ["Snow", "Neige"], ["Solar", "Solaire"], ["Spark", "Etincelle"],
    ["Sphere", "Sphere"], ["Splash", "Trempette"], ["Steel", "Acier"], ["Sting", "Dard"], ["Stone", "Pierre"],
    ["Storm", "Tempete"], ["Struggle", "Lutte"], ["Sucker", "Surprise"], ["Surf", "Surf"], ["Sweep", "Balayage"],
    ["Swift", "Vive"], ["Swing", "Elan"], ["Swipe", "Balayage"], ["Switch", "Change"], ["Sword", "Epee"],
    ["Tackle", "Charge"], ["Tail", "Queue"], ["Take", "Prise"], ["Throw", "Lancer"], ["Thunder", "Tonnerre"],
    ["Tomb", "Tombe"], ["Trailblaze", "Trace"], ["Tri", "Tri"], ["Vine", "Liane"], ["Voice", "Voix"],
    ["Volt", "Volt"], ["Waterfall", "Cascade"], ["Wave", "Vague"], ["Wheel", "Roue"], ["Whip", "Fouet"],
    ["Wild", "Sauvage"], ["Wind", "Vent"], ["Wing", "Aile"], ["Yawn", "Baillement"], ["Zap", "Zap"]
  ]
};

function translateMoveName(baseName, lang) {
  if (lang === "en") return baseName;
  const rules = MOVE_TRANSLATION_RULES[lang];
  if (!rules) return baseName;
  return rules.reduce((name, [from, to]) => name.split(from).join(to), baseName);
}

function getMoveKindLabel(kind) {
  if (kind === "fast") return tr("moveKindFast");
  if (kind === "charged") return tr("moveKindCharged");
  return tr("moveKindDex");
}

const MOVE_TYPE_ICON = {
  bug: "🐛",
  dark: "🌑",
  dragon: "🐉",
  electric: "⚡",
  fairy: "✨",
  fighting: "🥊",
  fire: "🔥",
  flying: "🪽",
  ghost: "👻",
  grass: "🍃",
  ground: "⛰️",
  ice: "❄️",
  normal: "⚪",
  poison: "☠️",
  psychic: "🔮",
  rock: "🪨",
  steel: "⚙️",
  water: "💧"
};

function getMoveTypeId(moveName) {
  const name = String(moveName || "").toLowerCase();
  if (/dragon|draco|outrage/.test(name)) return "dragon";
  if (/fire|flame|ember|blaze|heat|overheat|scorch/.test(name)) return "fire";
  if (/water|hydro|aqua|bubble|surf|scald|waterfall|liquid/.test(name)) return "water";
  if (/leaf|vine|seed|frenzy|grass|razor|trailblaze|magical/.test(name)) return "grass";
  if (/thunder|volt|spark|zap|shock|wild charge|charge beam/.test(name)) return "electric";
  if (/ice|frost|icy|avalanche|powder snow/.test(name)) return "ice";
  if (/psychic|psy|confusion|extrasensory/.test(name)) return "psychic";
  if (/shadow|hex|ominous|lick|astonish/.test(name)) return "ghost";
  if (/fairy|charm|dazzling|moonblast|play rough|disarming/.test(name)) return "fairy";
  if (/dark|snarl|foul|crunch|brutal swing|sucker|night slash|bite/.test(name)) return "dark";
  if (/poison|sludge|acid|poison fang|poison sting|jab/.test(name)) return "poison";
  if (/mud|earth|sand|drill run|earthquake|bulldoze/.test(name)) return "ground";
  if (/rock|stone|smack down/.test(name)) return "rock";
  if (/air|aerial|wing|gust|brave bird|peck/.test(name)) return "flying";
  if (/bug|x-scissor|infestation|fury cutter|signal beam|megahorn|struggle bug/.test(name)) return "bug";
  if (/steel|metal|iron|flash cannon|meteor mash|steel wing/.test(name)) return "steel";
  if (/punch|kick|chop|combat|counter|karate|aura sphere|brick break|dynamic|cross chop|sacred sword|low sweep/.test(name)) return "fighting";
  return "normal";
}

function getMoveTypeIcon(moveName) {
  return MOVE_TYPE_ICON[getMoveTypeId(moveName)] || MOVE_TYPE_ICON.normal;
}

function applyLanguage() {
  const tabs = $$(".tabs .tab");
  const tabText = tr("tabs");
  tabs.forEach((tab, i) => {
    if (tabText[i]) tab.textContent = tabText[i];
  });

  $("#lang-summary").textContent = tr("lang");
  $(".app-header p").textContent = tr("appSubtitle");
  $("#tab-pokemon h2").textContent = tr("pokemonTitle");
  $("#pokemon-form button[type='submit']").textContent = tr("pokemonSave");
  if ($("#pokemon-search")) $("#pokemon-search").placeholder = tr("pokemonSearch");
  $("#pokemon-fav-only").parentNode.lastChild.textContent = ` ${tr("pokemonFav")}`;
  if ($("#moves-title")) $("#moves-title").textContent = tr("movesTitle");
  if ($("#saved-pokemon-title")) $("#saved-pokemon-title").textContent = tr("savedPokemonTitle");
  if ($("#move-search")) $("#move-search").placeholder = tr("movesSearch");
  if ($("#move-pick-hint")) $("#move-pick-hint").textContent = tr("movePickHint");

  $("#tab-calc h2").textContent = tr("calcTitle");
  $("#calc-form button[type='submit']").textContent = tr("calcBtn");
  $("#tab-calc h3").textContent = tr("levelTitle");
  $("#tab-calc .hint").textContent = tr("levelHint");
  $("#level-form button[type='submit']").textContent = tr("levelBtn");
  $("#level-reset-btn").textContent = tr("levelResetBtn");
  $("#tab-iv h2").textContent = tr("ivCalcTitle");
  $("#tab-iv .hint").textContent = tr("ivCalcHint");
  $("#iv-form button[type='submit']").textContent = tr("ivCalcBtn");
  $("#iv-reset-btn").textContent = tr("ivResetBtn");

  $("#tab-check h2").textContent = tr("checkTitle");
  $("#daily-list").parentNode.querySelector("h3").textContent = tr("dailyTitle");
  $("#weekly-list").parentNode.querySelector("h3").textContent = tr("weeklyTitle");

  $("#tab-mapa h2").textContent = tr("mapTitle");
  $("#tab-mapa .hint").textContent = tr("mapHint");
  $("#geo-btn").textContent = tr("geoBtn");
  $("#new-place-btn").textContent = tr("newPlaceBtn");
  $("#place-autosave").parentNode.lastChild.textContent = ` ${tr("autosaveText")}`;

  $("#tab-record h2").textContent = tr("remindersTitle");
  $("#reminder-form button[type='submit']").textContent = tr("reminderBtn");
  $(".app-footer small").textContent = tr("footer");

  const pokemonForm = $("#pokemon-form").elements;
  pokemonForm.name.placeholder = tr("phName");
  pokemonForm.moves.placeholder = tr("phMoves");
  pokemonForm.notes.placeholder = tr("phNotes");

  const calcForm = $("#calc-form").elements;
  calcForm.currentLevel.placeholder = tr("phCurrentLevel");
  calcForm.targetLevel.placeholder = tr("phTargetLevel");
  calcForm.currentCp.placeholder = tr("phCurrentCp");
  calcForm.targetCp.placeholder = tr("phTargetCp");

  const levelForm = $("#level-form").elements;
  levelForm.nextDust.placeholder = tr("phNextDust");
  levelForm.nextCandy.placeholder = tr("phNextCandy");

  $("#move-search").placeholder = tr("phMoveSearch");

  const placeForm = $("#place-form").elements;
  placeForm.name.placeholder = tr("phPlaceName");
  placeForm.area.placeholder = tr("phArea");
  placeForm.notes.placeholder = tr("phNotes");

  const reminderForm = $("#reminder-form").elements;
  reminderForm.title.placeholder = tr("phEvent");
  reminderForm.note.placeholder = tr("phNotes");

  const ivForm = $("#iv-form").elements;
  ivForm.atk.placeholder = tr("phIvAtk");
  ivForm.def.placeholder = tr("phIvDef");
  ivForm.sta.placeholder = tr("phIvSta");

  document.documentElement.lang = currentLang;
}

function initLanguage() {
  const saved = load(STORAGE_KEYS.language, "es");
  currentLang = I18N[saved] ? saved : "es";
  applyLanguage();

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (!I18N[lang]) return;
      currentLang = lang;
      save(STORAGE_KEYS.language, lang);
      applyLanguage();
      document.dispatchEvent(new CustomEvent("app:language-changed", { detail: { lang } }));
    });
  });
}

function uid() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getIvTier(ivRaw) {
  const iv = Number(ivRaw);
  if (!Number.isFinite(iv)) return { cls: "iv-unknown", label: "IV sin dato" };
  if (iv <= 22) return { cls: "iv-low", label: `IV ${iv} bajo` };
  if (iv <= 36) return { cls: "iv-mid", label: `IV ${iv} medio` };
  return { cls: "iv-high", label: `IV ${iv} alto` };
}

function initTabs() {
  $$(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".tab").forEach((b) => b.classList.remove("active"));
      $$(".panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      $(`#tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
}

function initPokemon() {
  const form = $("#pokemon-form");
  const list = $("#pokemon-list");
  const search = $("#pokemon-search");
  const favOnly = $("#pokemon-fav-only");
  const moveSearch = $("#move-search");
  const moveList = $("#move-list");
  const moveCount = $("#move-count");
  let pokemon = load(STORAGE_KEYS.pokemon, []);

  function splitMoves(value) {
    return String(value || "")
      .split(/[,/;|]/)
      .map((m) => m.trim())
      .filter(Boolean);
  }

  function getAllMoves() {
    const map = new Map();
    MOVE_CATALOG.forEach((m) => map.set(`${m.name}|${m.kind}`, m));

    pokemon.forEach((p) => {
      splitMoves(p.moves).forEach((name) => {
        const keyFast = `${name}|fast`;
        const keyCharged = `${name}|charged`;
        if (!map.has(keyFast) && !map.has(keyCharged)) {
          map.set(`${name}|dex`, { name, kind: "dex" });
        }
      });
    });

    return [...map.values()].map((move) => ({
      ...move,
      displayName: translateMoveName(move.name, currentLang),
      displayKind: getMoveKindLabel(move.kind),
      typeIcon: getMoveTypeIcon(move.name)
    })).sort((a, b) => a.displayName.localeCompare(b.displayName, currentLang, { sensitivity: "base" }));
  }

  function getSelectedMoveSet() {
    const inputMoves = splitMoves(form.elements.moves.value);
    return new Set(inputMoves.map((m) => m.toLowerCase()));
  }

  function getMoveAliases(baseName) {
    return new Set([
      String(baseName || "").toLowerCase(),
      translateMoveName(baseName, "es").toLowerCase(),
      translateMoveName(baseName, "en").toLowerCase(),
      translateMoveName(baseName, "fr").toLowerCase(),
      translateMoveName(baseName, currentLang).toLowerCase()
    ]);
  }

  function isMoveSelected(selectedSet, baseName) {
    const aliases = getMoveAliases(baseName);
    return [...aliases].some((alias) => selectedSet.has(alias));
  }

  function toggleMoveInForm(moveName) {
    const current = splitMoves(form.elements.moves.value);
    const aliases = getMoveAliases(moveName);
    const idx = current.findIndex((m) => aliases.has(m.toLowerCase()));
    if (idx >= 0) {
      current.splice(idx, 1);
    } else {
      current.push(translateMoveName(moveName, "es"));
    }
    form.elements.moves.value = current.join(", ");
    form.elements.moves.focus();
  }

  function renderPokemonMoveTags(movesRaw) {
    const names = splitMoves(movesRaw);
    if (!names.length) return `<span class="hint">${tr("noMovesSaved")}</span>`;
    return names.map((name) => `
      <span class="move-badge">
        <span class="move-type-icon">${getMoveTypeIcon(name)}</span>
        ${translateMoveName(name, currentLang)}
      </span>
    `).join("");
  }

  function renderMoveCatalog() {
    if (!moveList || !moveSearch || !moveCount) return;
    const q = moveSearch.value.trim().toLowerCase();
    const all = getAllMoves();
    const selected = getSelectedMoveSet();
    const filtered = all.filter((m) => `${m.name} ${m.displayName} ${m.displayKind}`.toLowerCase().includes(q));

    moveCount.textContent = tr("moveCount")
      .replace("{shown}", String(filtered.length))
      .replace("{total}", String(all.length));
    moveList.innerHTML = filtered.map((m) => `
      <li class="chip-item">
        <button type="button" class="move-pick-btn ${isMoveSelected(selected, m.name) ? "active" : ""}" data-pick-move="${m.name}" title="${isMoveSelected(selected, m.name) ? tr("moveUnselectTitle") : tr("moveSelectTitle")}">
          <span class="move-type-icon">${m.typeIcon}</span>
          <span>${m.displayName}</span>
        </button>
        <small class="chip-tag">${m.displayKind}</small>
      </li>
    `).join("") || `<li class='card'>${tr("moveNoResults")}</li>`;
  }

  function renderPokemon() {
    const q = (search?.value || "").trim().toLowerCase();
    const filtered = pokemon.filter((p) => {
      const txt = `${p.name} ${p.moves}`.toLowerCase();
      return txt.includes(q) && (!favOnly?.checked || p.favorite);
    });
    list.innerHTML = filtered.map((p) => `
      <li class="card">
        <strong>${p.favorite ? "⭐ " : ""}${p.name}</strong>
        <small>CP ${p.cp || "-"} | ${p.date || "sin fecha"}</small>
        <small><span class="iv-pill ${getIvTier(p.iv).cls}">${getIvTier(p.iv).label}</span></small>
        <small class="move-badge-wrap">${renderPokemonMoveTags(p.moves)}</small>
        <small>${p.notes || ""}</small>
        <div class="card-actions">
          <button class="mini-btn fav" data-fav="${p.id}">${p.favorite ? tr("unfavBtn") : tr("favBtn")}</button>
          <button class="mini-btn delete" data-del="${p.id}">${tr("deleteBtn")}</button>
        </div>
      </li>
    `).join("") || "<li class='card'>No hay registros todavia.</li>";
  }

  function refreshPokemonTab() {
    renderPokemon();
    renderMoveCatalog();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    pokemon.unshift({ id: uid(), ...data, favorite: false });
    save(STORAGE_KEYS.pokemon, pokemon);
    form.reset();
    refreshPokemonTab();
  });

  [search, favOnly].filter(Boolean).forEach((el) => el.addEventListener("input", renderPokemon));
  if (moveSearch) moveSearch.addEventListener("input", renderMoveCatalog);
  form.elements.moves.addEventListener("input", renderMoveCatalog);
  document.addEventListener("app:language-changed", refreshPokemonTab);

  moveList.addEventListener("click", (e) => {
    const pick = e.target.closest("[data-pick-move]");
    if (!pick) return;
    toggleMoveInForm(pick.dataset.pickMove);
    renderMoveCatalog();
  });

  list.addEventListener("click", (e) => {
    const del = e.target.closest("[data-del]");
    const fav = e.target.closest("[data-fav]");
    if (del) {
      pokemon = pokemon.filter((p) => p.id !== del.dataset.del);
      save(STORAGE_KEYS.pokemon, pokemon);
      refreshPokemonTab();
    }
    if (fav) {
      pokemon = pokemon.map((p) => p.id === fav.dataset.fav ? { ...p, favorite: !p.favorite } : p);
      save(STORAGE_KEYS.pokemon, pokemon);
      renderPokemon();
    }
  });

  refreshPokemonTab();
}

function getPowerUpCost(level) {
  const row = POWER_UP_TABLE.find((r) => level >= r.min && level <= r.max);
  return row ? [row.dust, row.candy] : [10000, 15];
}

function getLevelRangeByNextCost(dust, candy) {
  return POWER_UP_TABLE.filter((r) => r.dust === dust && r.candy === candy);
}

function initCalc() {
  const form = $("#calc-form");
  const box = $("#calc-result");
  const levelForm = $("#level-form");
  const levelBox = $("#level-result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const curL = Number(data.currentLevel || 1);
    const tarL = Number(data.targetLevel || curL);
    const steps = Math.max(0, Math.round((tarL - curL) * 2));
    let dust = 0;
    let candy = 0;

    for (let i = 0; i < steps; i += 1) {
      const level = curL + i * 0.5;
      const [d, c] = getPowerUpCost(level);
      dust += d;
      candy += c;
    }

    const curCP = Number(data.currentCp || 10);
    const targetCp = Number(data.targetCp || curCP);
    const cpDelta = Math.max(0, targetCp - curCP);

    box.innerHTML = `
      <p><strong>Resultado estimado:</strong></p>
      <p>Mejoras: <strong>${steps}</strong></p>
      <p>Polvos estelares: <strong>${dust.toLocaleString()}</strong></p>
      <p>Caramelos: <strong>${candy.toLocaleString()}</strong></p>
      <p>Diferencia CP objetivo: <strong>${cpDelta}</strong></p>
      <small>Estimacion orientativa para decisiones rapidas.</small>
    `;
  });

  levelForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(levelForm).entries());
    const dust = Number(data.nextDust || 0);
    const candy = Number(data.nextCandy || 0);
    const matches = getLevelRangeByNextCost(dust, candy);

    if (!matches.length) {
      levelBox.innerHTML = "<p><strong>No coincide</strong> con costos estandar (revisa valores).</p>";
      return;
    }

    const min = Math.min(...matches.map((m) => m.min));
    const max = Math.max(...matches.map((m) => m.max));
    levelBox.innerHTML = `
      <p><strong>Nivel estimado:</strong> entre <strong>${min}</strong> y <strong>${max}</strong>.</p>
      <p>El juego no muestra nivel numerico exacto, por eso este calculo usa el costo de proxima mejora.</p>
      <small>Tip: si acabas de potenciar una vez, vuelve a leer costo y recalcula para acotar mas.</small>
    `;
  });

  levelForm.addEventListener("reset", () => {
    levelBox.innerHTML = "";
  });
}

function getIvTierMeta(total) {
  if (total === 45) return { label: tr("ivTierPerfect"), cls: "iv-tier-green" };
  if (total >= 37) return { label: tr("ivTierGreat"), cls: "iv-tier-green" };
  if (total >= 30) return { label: tr("ivTierGood"), cls: "iv-tier-yellow" };
  return { label: tr("ivTierLow"), cls: "iv-tier-red" };
}

function initIvCalculator() {
  const form = $("#iv-form");
  const box = $("#iv-result");
  if (!form || !box) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const atk = Math.max(0, Math.min(15, Number(data.atk || 0)));
    const def = Math.max(0, Math.min(15, Number(data.def || 0)));
    const sta = Math.max(0, Math.min(15, Number(data.sta || 0)));
    const total = atk + def + sta;
    const pct = (total / 45) * 100;
    const tier = getIvTierMeta(total);

    box.innerHTML = `
      <p class="iv-tier-title ${tier.cls}">${tier.label}</p>
      <p class="iv-percent-line">${tr("ivPercentLabel")}: <strong>${pct.toFixed(2)}%</strong></p>
      <p><strong>${tr("ivResultTitle")}:</strong></p>
      <p>${tr("ivStatsLabel")}: <strong>${atk}/${def}/${sta}</strong></p>
      <p>${tr("ivTotalLabel")}: <strong>${total}/45</strong></p>
    `;
  });

  form.addEventListener("reset", () => {
    box.innerHTML = "";
  });
}

function getDayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getWeekKey() {
  const now = new Date();
  const start = new Date(now);
  const day = (now.getDay() + 6) % 7;
  start.setDate(now.getDate() - day);
  return start.toISOString().slice(0, 10);
}

function initChecklist() {
  const dailyList = $("#daily-list");
  const weeklyList = $("#weekly-list");

  const state = load(STORAGE_KEYS.checklist, {
    dailyDate: getDayKey(),
    weeklyDate: getWeekKey(),
    dailyDone: {},
    weeklyDone: {}
  });

  if (state.dailyDate !== getDayKey()) {
    state.dailyDate = getDayKey();
    state.dailyDone = {};
  }
  if (state.weeklyDate !== getWeekKey()) {
    state.weeklyDate = getWeekKey();
    state.weeklyDone = {};
  }

  function renderOne(listEl, tasks, done, key) {
    listEl.innerHTML = tasks.map((task, i) => `
      <li>
        <label>
          <input type="checkbox" data-kind="${key}" data-idx="${i}" ${done[i] ? "checked" : ""}>
          ${task}
        </label>
      </li>
    `).join("");
  }

  function persist() {
    save(STORAGE_KEYS.checklist, state);
  }

  renderOne(dailyList, DAILY_TASKS, state.dailyDone, "daily");
  renderOne(weeklyList, WEEKLY_TASKS, state.weeklyDone, "weekly");

  [dailyList, weeklyList].forEach((el) => {
    el.addEventListener("input", (e) => {
      const cb = e.target.closest("input[type='checkbox']");
      if (!cb) return;
      const kind = cb.dataset.kind;
      const idx = cb.dataset.idx;
      if (kind === "daily") state.dailyDone[idx] = cb.checked;
      if (kind === "weekly") state.weeklyDone[idx] = cb.checked;
      persist();
    });
  });

  persist();
}

function initPlaces() {
  const form = $("#place-form");
  const list = $("#place-list");
  const geoBtn = $("#geo-btn");
  const newBtn = $("#new-place-btn");
  const autoSave = $("#place-autosave");

  let places = load(STORAGE_KEYS.places, []);
  let draft = load(STORAGE_KEYS.placeDraft, { id: uid() });

  function patchForm(data) {
    for (const [k, v] of Object.entries(data)) {
      const field = form.elements.namedItem(k);
      if (field && typeof v === "string") field.value = v;
    }
  }

  patchForm(draft);

  function render() {
    list.innerHTML = places.map((p) => `
      <li class="card">
        <strong>${p.type === "Gym" ? "🏟" : "🌀"} ${p.name}</strong>
        <small>${p.area || "Sin zona"}</small>
        <small>${p.lat && p.lng ? `Lat ${p.lat} | Lng ${p.lng}` : "Sin coordenadas"}</small>
        <small>${p.notes || ""}</small>
        <div class="card-actions">
          <button class="mini-btn delete" data-del="${p.id}">${tr("deleteBtn")}</button>
        </div>
      </li>
    `).join("") || "<li class='card'>Aun no tienes lugares guardados.</li>";
  }

  function values() {
    const data = Object.fromEntries(new FormData(form).entries());
    return {
      id: draft.id,
      name: (data.name || "").trim(),
      type: data.type || "",
      area: (data.area || "").trim(),
      notes: (data.notes || "").trim(),
      lat: data.lat || "",
      lng: data.lng || ""
    };
  }

  function upsertAuto() {
    const item = values();
    save(STORAGE_KEYS.placeDraft, item);

    if (!autoSave.checked) return;
    if (!item.name || !item.type) return;

    const i = places.findIndex((p) => p.id === item.id);
    if (i >= 0) places[i] = item;
    else places.unshift(item);
    save(STORAGE_KEYS.places, places);
    render();
  }

  let timer;
  form.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(upsertAuto, 280);
  });

  geoBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalizacion.");
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      form.elements.namedItem("lat").value = pos.coords.latitude.toFixed(6);
      form.elements.namedItem("lng").value = pos.coords.longitude.toFixed(6);
      upsertAuto();
    }, () => alert("No se pudo obtener la ubicacion."), { enableHighAccuracy: true, timeout: 10000 });
  });

  newBtn.addEventListener("click", () => {
    draft = { id: uid() };
    form.reset();
    save(STORAGE_KEYS.placeDraft, draft);
  });

  list.addEventListener("click", (e) => {
    const del = e.target.closest("[data-del]");
    if (!del) return;
    places = places.filter((p) => p.id !== del.dataset.del);
    save(STORAGE_KEYS.places, places);
    if (draft.id === del.dataset.del) {
      draft = { id: uid() };
      form.reset();
      save(STORAGE_KEYS.placeDraft, draft);
    }
    render();
  });

  render();
}

function initReminders() {
  const form = $("#reminder-form");
  const list = $("#reminder-list");
  let reminders = load(STORAGE_KEYS.reminders, []);

  function render() {
    reminders.sort((a, b) => new Date(a.when) - new Date(b.when));
    list.innerHTML = reminders.map((r) => `
      <li class="card">
        <strong>${r.title}</strong>
        <small>${new Date(r.when).toLocaleString()}</small>
        <small>${r.note || ""}</small>
        <small class="${r.fired ? "ok" : ""}">${r.fired ? "Avisado" : "Pendiente"}</small>
        <div class="card-actions">
          <button class="mini-btn delete" data-del="${r.id}">${tr("deleteBtn")}</button>
        </div>
      </li>
    `).join("") || "<li class='card'>No hay recordatorios.</li>";
  }

  function persist() {
    save(STORAGE_KEYS.reminders, reminders);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    reminders.push({ id: uid(), ...data, fired: false });
    persist();
    form.reset();
    render();
  });

  list.addEventListener("click", (e) => {
    const del = e.target.closest("[data-del]");
    if (!del) return;
    reminders = reminders.filter((r) => r.id !== del.dataset.del);
    persist();
    render();
  });

  setInterval(() => {
    const now = Date.now();
    let changed = false;
    reminders.forEach((r) => {
      if (!r.fired && new Date(r.when).getTime() <= now) {
        r.fired = true;
        changed = true;
        alert(`Recordatorio: ${r.title}${r.note ? `\n${r.note}` : ""}`);
      }
    });
    if (changed) {
      persist();
      render();
    }
  }, 30000);

  render();
}

function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function init() {
  initLanguage();
  initTabs();
  initPokemon();
  initCalc();
  initIvCalculator();
  initChecklist();
  initPlaces();
  initReminders();
  registerSW();
}

init();








