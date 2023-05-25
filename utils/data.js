const { Thoughts } = require("../models");

const usernames = [
    "PikachuMaster",
    "CharizardFan",
    "SquirtleSquad",
    "BulbaGarden",
    "JigglypuffDreamer",
    "EeveeLover",
    "GyaradosGuru",
    "SnorlaxSnoozer",
    "MewtwoMystic",
    "DragoniteTrainer",
    "GengarGhost",
    "MudkipMuncher",
    "RayquazaRider",
    "LugiaLegend",
    "CelebiSeeker",
    "TorterraTamer", 
    "InfernapeAce",
    "EmpoleonEmpire",
    "StaraptorSky",
    "LuxrayLightning",
    "GarchompChampion",
    "LucarioAura",
    "GlaceonFrost",
    "MamoswineMighty",
    "PorygonZapper",
    "ZoroarkIllusion", 
    "SamurottSwimmer",
    "EmboarBlaze",
    "SerperiorVine",
    "UnfezantFlyer",
    "ZebstrikaZapper",
    "ExcadrillDriller",
    "KrookodileDesert",
    "DarmanitanFlame",
    "ChandelureGhost",
    "HaxorusDragon",
    "HydreigonDark",
    "VolcaronaFlame"
  ];

  const email = [
    "bulbasaur123@outlook.com",
    "charmander345@gmail.com",
    "squirtle678@yahoo.com",
    "pikachu901@outlook.com",
    "jigglypuff234@gmail.com",
    "meowth567@yahoo.com",
    "psyduck890@outlook.com",
    "growlithe123@gmail.com",
    "poliwag456@yahoo.com",
    "abra789@outlook.com",
    "tentacool012@gmail.com",
    "geodude345@yahoo.com",
    "magnemite678@outlook.com",
    "grimer901@gmail.com",
    "gastly234@yahoo.com",
    "onix567@outlook.com",
    "voltorb890@gmail.com",
    "cubone123@yahoo.com",
    "hitmonlee456@outlook.com",
    "lickitung789@gmail.com",
    "koffing012@yahoo.com",
    "rhyhorn345@outlook.com",
    "tangela678@gmail.com",
    "kangaskhan901@yahoo.com",
    "horsea234@outlook.com",
    "goldeen567@gmail.com",
    "staryu890@yahoo.com",
    "mr.mime123@outlook.com",
    "scyther456@gmail.com",
    "jynx789@yahoo.com",
    "electabuzz012@outlook.com",
    "magmar345@gmail.com",
    "pinsir678@yahoo.com",
    "tauros901@outlook.com",
    "magikarp234@gmail.com",
    "gyarados567@yahoo.com",
    "lapras890@outlook.com",
    "ditto123@gmail.com",
    "eevee456@yahoo.com"
  ];

  const thoughts = [
    "Caught a rare Pokemon today!",
    "Training my team to become the very best.",
    "Exploring new regions and discovering new Pokemon.",
    "Preparing for an epic battle with my rival.",
    "Just hatched a shiny Pokemon!",
    "I can't wait to challenge the Elite Four.",
    "Trading Pokemon with friends to complete the Pokedex.",
    "Caught a legendary Pokemon! So hyped!",
    "Trying to find all the hidden items in this area.",
    "Participating in a Pokemon tournament.",
    "Building a competitive team with the perfect moveset.",
    "Feeling nostalgic playing the old Pokemon games.",
    "Enjoying the beautiful scenery in the Pokemon world.",
    "Bonding with my Pokemon and strengthening our friendship.",
    "Teaching my Pokemon a powerful new move.",
    "Preparing for a Gym Battle. Wish me luck!",
    "Exploring mysterious caves in search of rare Pokemon.",
    "Caught a shiny Eevee! Time to evolve it into something cool.",
    "Planning to challenge the Battle Frontier.",
    "Competing in a Pokemon breeding contest.",
    "Taking on Team Rocket and saving the day!",
    "Having a Pokemon-themed cosplay photoshoot.",
    "Training my Pokemon to have perfect IVs and EVs.",
    "Trying out different strategies in Pokemon battles.",
    "Spending time in the Pokemon Amie minigames.",
    "Designing my own custom Pokeball.",
    "Helping my friends evolve their trade-evolution Pokemon."
  ];

  const reactions = [
    "Wow, that's amazing!",
    "Good luck on your journey!",
    "That's so cool!",
    "I'm jealous! Keep it up!",
    "You're a true Pokemon Master!",
    "I wish I could do that too.",
    "That's a fantastic achievement!",
    "Keep catching 'em all!",
    "I can't wait to see your team in action!",
    "You're making great progress!",
    "I'm cheering for you!",
    "You're living the Pokemon dream!",
    "That's some serious dedication!",
    "Your Pokemon are lucky to have you!",
  ];

  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
  `${getRandomArrItem(usernames)}`;

const getRandomEmail = () =>
  `${getRandomArrItem(email)}`;


const getRandomThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      description: getRandomArrItem(thoughts),
      username: getRandomUsername(),
      reactions: getThoughtsReaction(1)
    });
  }
  return results;
};

const getThoughtsReaction = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reaction: getRandomArrItem(reactions),
      username: getRandomUsername(),
    });
}
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThought, getRandomEmail };