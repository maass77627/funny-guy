
let button = document.getElementById("newJoke")
button.addEventListener("click", () => {

})

let buttontwo = document.getElementById("answer")




fetch('https://v2.jokeapi.dev/joke/Any?amount=30')
.then((response) => response.json())
.then((json) => {

    console.log(json)
})

fetch('https://v2.jokeapi.dev/joke/Any?amount=1')
.then((response) => response.json())
.then((json) => {
     displayJoke(json)
    console.log(json)
})


function displayJoke(joke) {
   
  let p = document.getElementById("joke")
  if (joke.setup) {
  p.innerText = joke.setup
  } else {
    p.innerText = joke.joke
  }

  buttontwo.addEventListener("click", () => {
    console.log(joke)
  let ptwo = document.getElementById("joke-answer")
  ptwo.innerText = joke.delivery
})


}



