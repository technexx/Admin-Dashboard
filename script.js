let projectCards = document.querySelectorAll("#projects > #card")

for (let i = 0; i<projectClass.length; i++) {
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

    projectCards.appendChild(parOne)
    projectCards.appendChild(parTwo)
    projectCards.appendChild(imgOne)
    projectCards.appendChild(imgTwo)
    projectCards.appendChild(imgThree)

    console.log("project cards are " + projectCards)
}