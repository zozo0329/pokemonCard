document.getElementById("searchButton").addEventListener("click", function () {
  const inputField = document.getElementById("pokemonName");
  if (inputField.value.trim() === "") {
    inputField.classList.remove("shake");
    void inputField.offsetWidth;
    inputField.classList.add("shake");
    return;
  }
  pokemonFunction();
});

async function pokemonFunction() {
  try {
    const promt = document.getElementById("pokemonName").value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${promt}`);
    //
    if (!res.ok) {
      throw new Error("Error, Could not fetch resource");
    }
    const data = await res.json();
    console.log(data);
    const health = data.stats[0].base_stat;
    const sprite = data.sprites.other.dream_world.front_default;
    const pName = data.name;
    const pokemonHp = document.querySelector(".hp");
    const pokemonIMG = document.getElementById("pokemonImage");
    const nameOfPokemon = document.querySelector(".pokemon-name p");
    const capitalizedName =
      pName.charAt(0).toUpperCase() + pName.slice(1).toLowerCase();
    nameOfPokemon.innerHTML = capitalizedName;
    pokemonHp.innerHTML = "Hp:" + health;
    pokemonIMG.src = sprite;
    // stats
    const atkStat = data.stats[1].base_stat;
    const attack = document.querySelector(".atk");
    const defStat = data.stats[2].base_stat;
    const defence = document.querySelector(".def");
    const spdStat = data.stats[5].base_stat;
    const speed = document.querySelector(".spd");
    //
    attack.innerHTML = "Attack: " + atkStat;
    defence.innerHTML = "Defence: " + defStat;
    speed.innerHTML = "Speed: " + spdStat;
    //

    // Other functions
    appendTypes(data.types);
    changeCardBackground(data.types);
  } catch (error) {
    console.log(error);
  }
}

function appendTypes(types) {
  document.querySelector(".type").innerHTML = "";

  const typeColors = {
    normal: "#8A7A5B",
    fire: "#CB6A28",
    water: "#4A72B0",
    electric: "#D0B921",
    grass: "#65903C",
    ice: "#7CABAE",
    fighting: "#A0221D",
    poison: "#852E82",
    ground: "#BB9A52",
    flying: "#8873C3",
    psychic: "#D23F6D",
    bug: "#838217",
    rock: "#947C2B",
    ghost: "#594477",
    dragon: "#5530CB",
    dark: "#574436",
    steel: "#9393A3",
    fairy: "#B0698D",
  };

  types.forEach((item) => {
    const para = document.createElement("p");
    const typeName = item.type.name.toLowerCase();
    para.textContent =
      item.type.name.charAt(0).toUpperCase() +
      item.type.name.slice(1).toLowerCase();
    para.style.backgroundColor = typeColors[typeName];
    document.querySelector(".type").appendChild(para);
  });
}

function changeCardBackground(types) {
  const card = document.querySelector(".card");
  const typeColors = {
    normal: ["#A8A77A", "#C6C6A7"],
    fire: ["#EE8130", "#FF9C54"],
    water: ["#6390F0", "#86BFFF"],
    electric: ["#F7D02C", "#FBE273"],
    grass: ["#7AC74C", "#A7DB8D"],
    ice: ["#96D9D6", "#BCEEF4"],
    fighting: ["#C22E28", "#E1564D"],
    poison: ["#A33EA1", "#C869C7"],
    ground: ["#E2BF65", "#F1DCA3"],
    flying: ["#A98FF3", "#C6B7F5"],
    psychic: ["#F95587", "#FF82AB"],
    bug: ["#A6B91A", "#C6D16E"],
    rock: ["#B6A136", "#D1C17D"],
    ghost: ["#735797", "#A27DFA"],
    dragon: ["#6F35FC", "#8571E4"],
    dark: ["#705746", "#A29288"],
    steel: ["#B7B7CE", "#D1D1E0"],
    fairy: ["#D685AD", "#EBA7C6"],
  };
  if (types.length > 0) {
    const typeName = types[0].type.name.toLowerCase();
    const colors = typeColors[typeName];
    if (colors) {
      card.style.background = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
    }
  }
}
document
  .querySelector(".for-user button")
  .addEventListener("click", pokemonFunction);
document
  .querySelector("#pokemonName")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      pokemonFunction();
    }
  });

/* 
BACKGROUND COLOR FOR TYPES
const typeColors = { 
Normal: '#A8A77A',
 Fire: '#EE8130',
 Water: '#6390F0',
 Electric: '#F7D02C',
  Grass: '#7AC74C',
  Ice: '#96D9D6',
  Fighting: '#C22E28',
  Poison: '#A33EA1',
  Ground: '#E2BF65',
  Flying: '#A98FF3',
  Psychic: '#F95587',
  Bug: '#A6B91A',
  Rock: '#B6A136',
  Ghost: '#735797',
  Dragon: '#6F35FC',
  Dark: '#705746',
  Steel: '#B7B7CE',
  Fairy: '#D685AD'
 };

*/
/*
BACKGROUND COLOR FOR CARD
normal: "#8A7A5B",
fire: "#CB6A28",
water: "#4A72B0",
electric: "#D0B921",
grass: "#65903C",
ice: "#7CABAE",
fighting: "#A0221D",
poison: "#852E82",
ground: "#BB9A52",
flying: "#8873C3",
psychic: "#D23F6D",
bug: "#838217",
rock: "#947C2B",
ghost: "#594477",
dragon: "#5530CB",
dark: "#574436",
steel: "#9393A3",
fairy: "#B0698D",
 */
