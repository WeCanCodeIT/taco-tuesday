fetch('http://taco-randomizer.herokuapp.com/random/')
.then(response => response.json())
.then(json=> console.log(json))