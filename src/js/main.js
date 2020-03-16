const tacoButton = document.querySelector(".taco-button");

const getARandomTaco= () =>{
    fetch('http://taco-randomizer.herokuapp.com/random/')
    .then(response => response.json())
    .then(taco => console.log(taco));
}

tacoButton.addEventListener('click', getARandomTaco);



// fetch('http://taco-randomizer.herokuapp.com/random/')
// .then(response => response.json())
// .then(json=> console.log(json))