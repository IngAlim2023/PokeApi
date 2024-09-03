const apiPoke = "https://pokeapi.co/api/v2/pokemon?limit=1200";
let divPokemon = document.getElementById("pokemon");
const pokemones = [];


const consumo = async () => {
    try {
        const lectura = await fetch(apiPoke);
        const data = await lectura.json();
        const resultados = data.results;

        for (let i = 0; i < resultados.length; i++) {
            
            let card = document.createElement('div');
            card.className = "card";

            
            let parrafo = document.createElement('h1');
            parrafo.className = "nombre";
            parrafo.innerText = resultados[i].name;
            card.appendChild(parrafo);

            
            let habili = resultados[i].url;
            const conshabi = await fetch(habili);
            var data2 = await conshabi.json();

            let experiencia = document.createElement('h3');
            experiencia.className = "exp";
            experiencia.innerText ="Experiencia base: " + data2.base_experience;
            card.appendChild(experiencia);

            let imagenPoke = document.createElement('img');
            imagenPoke.className = "imagen-poke";
            imagenPoke.src = data2.sprites.front_default;
            card.appendChild(imagenPoke);

            pokemones_list = {
                id: i + 1,
                nombre : resultados[i].name,
                img_url : data2.sprites.front_default
            };

            pokemones.push(pokemones_list);

            divPokemon.appendChild(card);
        }    
        
    } catch (error) {
        console.log(error);
    }
}; 

let busca = document.getElementById('busca');
let busqueda = document.getElementById('busqueda');

busqueda.addEventListener('click', ()=>{
    if (busca.value.trim()) {
        const resultado = busca.value.toLowerCase();

        const pokemonEncontrado = pokemones.find(pokemon => pokemon.nombre.toLowerCase() === resultado);

        console.log(pokemonEncontrado);
        if (pokemonEncontrado) {
            plasmarPokemon(pokemonEncontrado.id - 1);
        } else {
            alert('Pokémon no encontrado, intentalo de nuevo.');
        }
    } else {
        alert('Buscador vacío, intentalo de nuevo.');
    } 

})

busca.addEventListener('keypress', (event)=>{
    if (event.key === 'Enter') {
        if (busca.value.trim()) {
            const resultado = busca.value.toLowerCase();
    
            const pokemonEncontrado = pokemones.find(pokemon => pokemon.nombre.toLowerCase() === resultado);
    
            console.log(pokemonEncontrado);
            if (pokemonEncontrado) {
                plasmarPokemon(pokemonEncontrado.id - 1);
            } else {
                alert('Pokémon no encontrado, intentalo de nuevo.');
            }
        } else {
            alert('Buscador vacío, intentalo de nuevo.');
        }     
    }
    

})

function plasmarPokemon (numPoke){
    //Atrapamos el modal
    var modalPoke = document.getElementById('mostrar-pokemon');
    
   //creamos el card del pokemon que queremos mostrar
    let cardPoke = document.createElement('div');
        cardPoke.className = "cardPoke";
    
    let cPTitle = document.createElement('p');
        cPTitle.innerText = pokemones[numPoke].nombre;
        cardPoke.appendChild(cPTitle);

    let imagPoke = document.createElement('img');
        imagPoke.className = "imag-poke";
        imagPoke.src = pokemones[numPoke].img_url;
        cardPoke.appendChild(imagPoke);
        
    modalPoke.appendChild(cardPoke);

    
    //Metodo para cerrar el modal

    modalPoke.addEventListener('click', ()=>{
        modalPoke.innerHTML = '';
        modalPoke.close();
    }) 

    // Mostramos el modal
    modalPoke.showModal();
}


consumo();
