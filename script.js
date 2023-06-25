const projectCards = document.querySelector(".projects")

let titleArray = [
"Closed Mouth Chewing Project",
"Gum and Hair: A Tale of Two Things", 
"Snacking on Folicles: Dispelling the Myths", 
"Gum Chewing in an Anti-Gum World", 
"Free Rapunzel Society", 
"Keep Rapunzel Jailed Society" 
]

let textArray = [
"Learn how to be less visually disgusting while your chonky chompers masticate their daily feed!", 
"You were chewing gum and combing your hair, and suddenly you had gum in your hair! Let's deconstruct this phenomena.", 
"A few wackjob hair gourmands have sullied the long standing, time honored tradition of elegant folicle munching. Find out what YOU can do to fight back!",
"Gobsmacker, chew monster, tooth hound, smack-a-rack-a-doo - these are just some of the shameful epithets hurled at gum chewers on the daily. In this piece, we follow several young patriots who refused to let anti-gum Commies shame them into submission.",
"What does society do with liberty seeking heroines? One only has to examine the cruel fate of Rapunzel to know the answer. We believe this brave maverick has been unjustly detained for over 200 years, and generations of us have worked tirelessly to free her!",
"Dude, her parents stole roots from a sorcerer, and you want to let her out? What kind of message does this send to people? Oh, steal all the delicious dirt grub you want, and no harm will come to your children! What liberal garbage." 
]

for (let i=0; i<6; i++) {
    const cardElement = document.createElement("div")
    cardElement.classList.add("card")

    const parOne = document.createElement("p");
    const parTwo = document.createElement("p");

    parOne.classList.add("title")
    parTwo.classList.add("text")

    parOne.innerText = titleArray[i]
    parTwo.innerText = textArray[i]

    const linkOne = document.createElement("a")
    const linkTwo = document.createElement("a")
    const linkThree = document.createElement("a")

    linkOne.href = ""
    linkTwo.href = ""
    linkThree.href = ""

    const imgOne = document.createElement("img")
    const imgTwo = document.createElement("img")
    const imgThree = document.createElement("img")

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
    
    const buttonHolder = document.createElement("div")
    buttonHolder.classList.add("button-holder")

    buttonHolder.appendChild(linkOne)
    buttonHolder.appendChild(linkTwo)
    buttonHolder.appendChild(linkThree)

    cardElement.appendChild(parOne)
    cardElement.appendChild(parTwo)
    cardElement.appendChild(buttonHolder)

    projectCards.appendChild(cardElement)

    console.log("card elements are " + cardElement.innerHTML)
}