const projectCards = document.querySelectorAll(".projects > .card")
console.log(projectCards)

for (let i = 0; i<projectCards.length; i++) {
    var parOne = document.createElement("p");
    var parTwo = document.createElement("p");

    parOne.classList.add("title")
    parOne.innerText = "Title!"
    parTwo.innerText = "Text!"

    let imgOne = document.createElement("img")
    let imgTwo = document.createElement("img")
    let imgThree = document.createElement("img")

    imgOne.src = "./images/star-plus-outline.svg"
    imgTwo.src = "./images/magnify.svg"
    imgThree.src = "./images/share-variant-outline.svg"

    imgOne.style.width = "30px"
    imgOne.style.height = "30px"
    imgTwo.style.width = "30px"
    imgTwo.style.height = "30px"
    imgThree.style.width = "30px"
    imgThree.style.height = "30px"

    projectCards[i].appendChild(parOne)
    projectCards[i].appendChild(parTwo)
    projectCards[i].appendChild(imgOne)
    projectCards[i].appendChild(imgTwo)
    projectCards[i].appendChild(imgThree)

    console.log("project cards are " + projectCards)
}