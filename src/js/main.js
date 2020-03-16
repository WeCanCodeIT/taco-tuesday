const tacoButton = document.querySelector(".taco-button");

const getARandomTaco = () => {
    fetch('http://taco-randomizer.herokuapp.com/random/')
        .then(response => response.json())
        .then(taco => updateHtmlWIthTaco(taco));
}

const updateHtmlWIthTaco = (taco) => {
    const newTacoElement = createNewTacoCard();
    console.log(newTacoElement)
    updateTitle(newTacoElement, taco);
    updateIngredients(newTacoElement, taco);
    document.querySelector('.tacos').append(newTacoElement);

}
const createNewTacoCard = () => {
    const tacoCard = document.createElement('article');
    tacoCard.classList.add('taco');
    addTitleElement(tacoCard);
    addIngredients(tacoCard);
    addRemoveButton(tacoCard);
    return tacoCard;
};
const updateIngredients = (element, taco) => {
    updateIngredientTitles(element, taco);
    updateIngredientRecipes(element, taco);

}

const updateIngredientRecipes = (element, taco) => {
    element.querySelector('.base-layer__recipe').innerText = taco.base_layer.recipe;;
    element.querySelector('.mixin__recipe').innerText = taco.mixin.recipe;
    element.querySelector('.condiment__recipe').innerText = taco.condiment.recipe;
    element.querySelector('.seasoning__recipe').innerText = taco.seasoning.recipe;
    element.querySelector('.shell__recipe').innerText = taco.shell.recipe;
}

const updateIngredientTitles = (element, taco) => {
    element.querySelector('.base-layer__title').innerText = taco.base_layer.name;
    element.querySelector('.mixin__title').innerText = taco.mixin.name
    element.querySelector('.condiment__title').innerText = taco.condiment.name
    element.querySelector('.seasoning__title').innerText = taco.seasoning.name
    element.querySelector('.shell__title').innerText = taco.shell.name
}
const updateTitle = (element, taco) => {
    const tacoTitle = `${taco.base_layer.name} taco with ${taco.mixin.name} ` +
        `topped with ${taco.condiment.name}, seasoned with ${taco.seasoning.name}, wrapped in a warm ${taco.shell.name}`;
    element.querySelector('.taco__title').innerText = tacoTitle;

}


function addTitleElement(element) {
    const title = document.createElement('h2');
    title.classList.add("taco__title");
    element.append(title);
}

function addIngredients(element) {
    const ingredients = document.createElement('div');
    ingredients.classList.add('ingredients');
    addSection(ingredients, 'base-layer');
    addSection(ingredients, 'mixin');
    addSection(ingredients, 'condiment');
    addSection(ingredients, 'seasoning');
    addSection(ingredients, 'shell');
    element.append(ingredients);

}
const addSection = (appender, typeOfSection) => {
    const sectionToAppend = document.createElement('section');
    const title = document.createElement('h3');
    const recipe = document.createElement('p');
    sectionToAppend.classList.add(`${typeOfSection}`);
    title.classList.add(`${typeOfSection}__title`);
    recipe.classList.add(`${typeOfSection}__recipe`);
    sectionToAppend.append(title);
    sectionToAppend.append(recipe);
    appender.append(sectionToAppend);
}
const addRemoveButton = (element) => {
    const removeButton = document.createElement('p');
    removeButton.classList.add("taco__remove-button");
    removeButton.innerText = '+';
    removeButton.addEventListener('click', (event)=>{
        event.target.parentNode.remove();
    });
    element.append(removeButton);
}
tacoButton.addEventListener('click', getARandomTaco);
