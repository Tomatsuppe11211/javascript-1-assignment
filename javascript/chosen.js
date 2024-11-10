

let sendProducts = []

/*getting added products*/
const addedProducts = JSON.parse(localStorage.getItem("products"))

if(addedProducts != null){
    for(let i = 0; i < addedProducts.length; i++){
        sendProducts.push(addedProducts[i])
    }

console.log(sendProducts)
}



/*retrieving items from home page*/ 
let sent = JSON.parse(sessionStorage.getItem("see"))



/*Changing the page's title*/
const pageTitle = document.getElementById("productPage")
pageTitle.innerHTML = "Purchase " + sent.name 




/*Retrieving the clicked prduct from index.html*/
const gameSection = document.getElementById("gameInfo")

const gameImage = document.createElement("img")
    gameImage.src = sent.image

const gameDiv = document.createElement("div")

const gameTitle = document.createElement("h2")
    gameTitle.id = "gameTitle"
    gameTitle.innerHTML = sent.name

const gameDescription = document.createElement("p")
    gameDescription.id = "gameDescription"
    gameDescription.innerHTML = sent.description

const gamePrice = document.createElement("p")
    gamePrice.id = "gamePrice"


    let productPrice = 0

    if(sent.sale == true){productPrice = sent.discount} else {productPrice = sent.price}


    gamePrice.innerHTML = "Price: " + productPrice + " $"






/*Displaying the chosen product*/
gameSection.appendChild(gameImage)
gameSection.appendChild(gameDiv)

gameDiv.appendChild(gameTitle)
gameDiv.appendChild(gameDescription)
gameDiv.appendChild(gamePrice)






// Adding game if clicked
const button = document.createElement("button")
button.id = "add-button"
button.innerHTML = "Add to cart"
gameSection.appendChild(button)



button.onclick = function(){
    sendProducts.push(sent)
    const newButton = document.createElement("button")
    newButton.id = "add-button"
    newButton.innerHTML = "Remove from cart"
    gamePrice.innerHTML = "Added to cart for " + productPrice + " $"
    gameSection.appendChild(newButton)
    button.remove()


    localStorage.setItem("products", JSON.stringify(sendProducts))
    console.log(sendProducts)

    //removing game if clicked
    newButton.onclick = function(){
        sendProducts.pop(sent)
        console.log(sendProducts)
        newButton.remove()
        gameSection.appendChild(button)
        gamePrice.innerHTML = "Price: " + productPrice + " $"
    }
    
}

