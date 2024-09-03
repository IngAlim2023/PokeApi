const homePage = "https://rickandmortyapi.com/api/character";


let leer = async () => {
    const data = await fetch(homePage);
    const dataJson = await data.json();

    console.log(dataJson);
    
}

leer();