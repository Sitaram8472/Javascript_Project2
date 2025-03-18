const jokeconatiner = document.querySelector(".jokes");
const btn = document.querySelector(".btn");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = () => {
    jokeconatiner.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeconatiner.textContent = `${item.joke}`;
        jokeconatiner.classList.add("fade");
    })
}
btn.addEventListener("click", getjoke);
getjoke();
