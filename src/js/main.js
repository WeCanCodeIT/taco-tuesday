const tacoButton = document.querySelector(".taco-button");
let tacoElement = document.querySelector(".taco");
const getARandomTaco = () => {
    fetch('http://taco-randomizer.herokuapp.com/random/')
        .then(response => response.json())
        .then(taco => updateHtmlWIthTaco(taco));
}

const updateHtmlWIthTaco = (taco) => {
    updateTitle(taco);
    updateIngredients(taco);
}

const updateIngredients = (taco) =>{
    updateIngredientTitles(taco);
    updateIngredientRecipes(taco);
    
}

const updateIngredientRecipes = (taco) =>{
    document.querySelector('.base-layer__recipe').innerText = taco.base_layer.recipe;;
    document.querySelector('.mixin__recipe').innerText = taco.mixin.recipe;
    document.querySelector('.condiment__recipe').innerText = taco.condiment.recipe;
    document.querySelector('.seasoning__recipe').innerText = taco.seasoning.recipe;
    document.querySelector('.shell__recipe').innerText = taco.shell.recipe;
}

const updateIngredientTitles = (taco) =>{
    document.querySelector('.base-layer__title').innerText = taco.base_layer.name;
    document.querySelector('.mixin__title').innerText = taco.mixin.name
    document.querySelector('.condiment__title').innerText = taco.condiment.name
    document.querySelector('.seasoning__title').innerText = taco.seasoning.name
    document.querySelector('.shell__title').innerText = taco.shell.name
}
const updateTitle = (taco) => {
    const tacoTitle = `${taco.base_layer.name} taco with ${taco.mixin.name} `
    +`topped with ${taco.condiment.name}, seasoned with ${taco.seasoning.name}, wrapped in a warm ${taco.shell.name}`;
    document.querySelector('.taco__title').innerText = tacoTitle;

}

tacoButton.addEventListener('click', getARandomTaco);
