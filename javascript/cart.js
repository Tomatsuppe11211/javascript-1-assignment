

let products = []


let totalPrice = 0


let cart = []
let itemCount = 0





const getGames = async() => {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const data = await fetch(url)
    const json = await data.json()

    products = json

    let gameName = window.sessionStorage.getItem("title")
    let gameImage = window.sessionStorage.getItem("image")
    let gamePrice = window.sessionStorage.getItem("price")
    cart.push({title: gameName, price: gamePrice, image: gameImage})

    const itemDisplay = document.getElementById("items")



    for(let i = 0; i < cart.length; i++){
        const itemSection = document.createElement("div")
        itemSection.id = "cartItem"
        
        const itemImage = document.createElement("img")
        itemImage.src = gameImage
        
        const gameInfo = document.createElement("div")
        gameInfo.id = "gameInformation"

        const itemTitle = document.createElement("h3")
        itemTitle.innerHTML = gameName


        const itemPrice = document.createElement("p")
        itemPrice.innerHTML = "Price: " + gamePrice + " $"


        const removeButton = document.createElement("i")
        removeButton.className = "fa-solid fa-trash"


        itemDisplay.appendChild(itemSection)
        itemSection.appendChild(itemImage)
        itemSection.appendChild(gameInfo)
        itemSection.appendChild(removeButton)
        gameInfo.appendChild(itemTitle)
        gameInfo.appendChild(itemPrice)
    }
    
    
    
    
    
    
    
    
}






console.log(cart)


localStorage.setItem("games", JSON.stringify(cart))
let getSavedCart = localStorage.getItem("games") 

getGames()