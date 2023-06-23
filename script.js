const projectCards = document.querySelector(".projects")

for (let i=0; i<6; i++) {
    const cardElement = document.createElement("div")
    cardElement.classList.add("card")

    var parOne = document.createElement("p");
    var parTwo = document.createElement("p");

    parOne.classList.add("title")
    parOne.innerText = "Title!"
    parTwo.innerText = "Text!"

    let linkOne = document.createElement("a")
    let linkTwo = document.createElement("a")
    let linkThree = document.createElement("a")

    linkOne.href = ""
    linkTwo.href = ""
    linkThree.href = ""

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

    linkOne.appendChild(imgOne)
    linkTwo.appendChild(imgTwo)
    linkThree.appendChild(imgThree)

    cardElement.appendChild(parOne)
    cardElement.appendChild(parTwo)
    cardElement.appendChild(linkOne)
    cardElement.appendChild(linkTwo)
    cardElement.appendChild(linkThree)

    projectCards.appendChild(cardElement)

    console.log("card elements are " + cardElement.innerHTML)
}