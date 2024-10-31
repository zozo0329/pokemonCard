async function pokemonFunction() {
  try {
    const promt = document.getElementById("pokemonName").value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${promt}`);
    //
    if (!res.ok) {
      throw new Error("Error, Could not fetch resource");
    }
    //
    const data = await res.json();
    console.log(data);
    //
    //
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
  } catch (error) {
    console.log(error);
  }
}
function appendTypes(types) {
  types.forEach((item) => {
    const para = document.createElement("p");
    para.textContent = item.type.name;
    document.querySelector(".type").appendChild(para);
  });
}
function appendTypes(types) {
  const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
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

/* 

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
