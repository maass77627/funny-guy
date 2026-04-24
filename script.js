document.addEventListener("DOMContentLoaded", () => {
let ptwo = document.getElementById("joke-answer")
  let p = document.getElementById("joke")
  let currentJoke 
  let filteredJoke


  let pfour = document.getElementById("answertwo")
    let pthree = document.getElementById("joketwo")

  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = form.querySelector("input")
    let value = input.value
    fetchFilterJoke(value)
    console.log(input.value)
  })

fetchJoke()

let button = document.getElementById("newJoke")
// button.addEventListener("click", () => {

// })

let buttontwo = document.getElementById("answer")

 buttontwo.addEventListener("click", () => {
    console.log(joke)
  
  ptwo.innerText = currentJoke.delivery
})

button.addEventListener("click", () => {
p.innerText = ""
ptwo.innerText = ""
fetchJoke()
})

let buttonthree = document.getElementById("answer-button")

buttonthree.addEventListener("click", () => {
    console.log(filteredJoke.delivery)
pfour.innerText = filteredJoke.delivery
})



// fetch('https://v2.jokeapi.dev/joke/Any?amount=30')
// .then((response) => response.json())
// .then((json) => {

//     console.log(json)
// })

function fetchJoke() {
fetch('https://v2.jokeapi.dev/joke/Any?amount=1')
.then((response) => response.json())
.then((json) => {
     displayJoke(json)
     currentJoke = json
    console.log(json)
})
}

function displayJoke(joke) {

  if (joke.setup) {
  p.innerText = joke.setup
  } else {
    p.innerText = joke.joke
  }
}


function fetchFilterJoke(value) {
    fetch(`https://v2.jokeapi.dev/joke/${value}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        filteredJoke = json
        displayFilterJoke(json)
    })
}

function displayFilterJoke(joke) {
    console.log(joke)
    // let pfour = document.getElementById("answertwo")
    // let pthree = document.getElementById("joketwo")
     if (joke.setup) {
  pthree.innerText = joke.setup
  } else {
    pthree.innerText = joke.joke
  }
//   pfour.innerText = joke.delivery
}




})



