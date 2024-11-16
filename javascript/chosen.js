

let sendProducts = []

/*getting added products*/
const addedProducts = JSON.parse(localStorage.getItem("products"))

if(addedProducts != null){
    for(let i = 0; i < addedProducts.length; i++){
        sendProducts.push(addedProducts[i])
    }
console.log(sendProducts)
}









//---------------------------------------------------------------------------------------------------------------

/*retrieving items from home page*/ 
let sent = JSON.parse(sessionStorage.getItem("see"))
console.log(sent.onSale)

/*Changing the page's title*/
const pageTitle = document.getElementById("productPage")
pageTitle.innerHTML = "Purchase " + sent.name 

















//----------------------------------------------------------------------------------------------------------------


//retrieving the chosen product from the home page
const gameSection = document.getElementById("gameInfo")

const gameImage = document.createElement("img")
    gameImage.src = sent.image


const gameDiv = document.createElement("div")
    gameDiv.id = "gameDetails"












//adding game title and icon (if favorite)
const titleAndFavorite = document.createElement("div")
    titleAndFavorite.id = "titleAndHeart"

//Adding title
const gameTitle = document.createElement("h3")
    gameTitle.innerHTML = sent.title
    titleAndFavorite.appendChild(gameTitle)



//adding mark if game is a favorite
const favorite = document.createElement("i")
    favorite.className = "fa-solid fa-heart"
    favorite.id = "heart"

    if(sent.favorite == true){titleAndFavorite.appendChild(favorite)}













//adding game description
const description = document.createElement("p")
    description.id = "gameDescription"
    description.innerHTML = sent.description
    











//adding genre, age rating and release year
const details = document.createElement("div")
    details.id = "details"


const genre = document.createElement("p")
    genre.innerHTML = "Genre: " + sent.genre
    details.appendChild(genre)

const age = document.createElement("p")
    age.innerHTML = "Age: " + sent.ageRating
    details.appendChild(age)

const released = document.createElement("p")
    released.innerHTML = "Released in: " + sent.released
    details.appendChild(released)









//adding game prices
const showPrice = document.createElement("div")
    showPrice.id = "showPrice"

const saleIcon = document.createElement("i")
    saleIcon.className = "fa-solid fa-tag"
    saleIcon.id = "saleIcon"

let pay = 0

const price = document.createElement("p")
    if(sent.onSale == true){
        price.innerHTML = "Price: " + sent.discountedPrice + " $"
        pay += sent.discountedPrice
        showPrice.appendChild(price)
        showPrice.appendChild(saleIcon)
    } else{
        price.innerHTML = "Price: " + sent.price + " $"
        pay += sent.price
        showPrice.appendChild(price)
    }




//adding tags
const tags = document.createElement("p")
    tags.innerHTML = "Tags: " + sent.tags









//adding product info
    gameSection.appendChild(gameImage)
    gameSection.appendChild(gameDiv)

    gameDiv.appendChild(titleAndFavorite)
    gameDiv.appendChild(description)
    gameDiv.appendChild(details)
    gameDiv.appendChild(showPrice)
    gameDiv.appendChild(tags)
    
    


// creating button for adding game
const button = document.createElement("button")
button.id = "add-button"
button.innerHTML = "Add to cart"
gameDiv.appendChild(button)



















//------------------------------------------------------------------------------------------------------------

//adding game to the cart
button.onclick = function(){
    sendProducts.push(sent)
    const newButton = document.createElement("button")
    newButton.id = "add-button"
    newButton.innerHTML = "Remove from cart"
    price.innerHTML = "Added to cart for " + pay + " $"
    gameDiv.appendChild(newButton)
    button.remove()


    localStorage.setItem("products", JSON.stringify(sendProducts))
    console.log(sendProducts)

    //removing game if clicked
    newButton.onclick = function(){
        sendProducts.pop(sent)
        console.log(sendProducts)
        newButton.remove()
        gameDiv.appendChild(button)
        price.innerHTML = "Price: " + pay + " $"
    }
    
}

