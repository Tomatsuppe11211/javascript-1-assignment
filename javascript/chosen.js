
let addedProduct = []
let productCount = 0


/*marking elements on the page that is to be changed when i click on them on the first index page*/
const productDiv = document.getElementById("gameInfo")
const gameImage = document.getElementById("gameImage")
const gameTitle = document.getElementById("gameTitle")
const gameDescription = document.getElementById("gameDescription")
const gamePrice = document.getElementById("gamePrice")


const homeButton = document.getElementById("sendHome")
homeButton.onclick = function(){
    if(productCount > 0){
        alert(sent.name + " is added")
        sessionStorage.setItem("product", JSON.stringify(addedProduct))
    } else {
        alert("No game is added")
        sessionStorage.clear()
    }

    window.location.href="../index.html"
}

const cartButton = document.getElementById("sendCart")
cartButton.onclick = function(){
    if(productCount > 0){
        alert(sent.name + " is added")
        sessionStorage.setItem("product", JSON.stringify(addedProduct))
    } else {
        alert("No game is added")
        sessionStorage.clear()
    }

    window.location.href="../checkout/index.html"
}  






/*retrieving items from last page*/ 
let sent = JSON.parse(sessionStorage.getItem("see"))
console.log(sent)


const pageTitle = document.getElementById("productPage")
pageTitle.innerHTML = "Purchase " + sent.name 

let productPrice = 0

if(sent.sale == true){
    productPrice = sent.price - sent.discount
    console.log(productPrice)
} else {
    productPrice = sent.price
    console.log(productPrice)
}








/*Adding the product to the page*/
gameImage.src = sent.image
gameTitle.innerHTML = sent.name
gameDescription.innerHTML = sent.description
gamePrice.innerHTML = "Price: " + productPrice + " $"









// Adding game if clicked
const button = document.createElement("button")
button.id = "add-button"
button.innerHTML = "Add to cart"
productDiv.appendChild(button)

button.onclick = function(){
    const addProduct = {
        name: sent.name,
        price: productPrice,
        image: sent.image,
        added: true
    }

    productCount += 1
    const newButton = document.createElement("button")
    newButton.id = "add-button"
    newButton.innerHTML = "Remove from cart"
    gamePrice.innerHTML = "Added to cart for " + productPrice + " $"
    productDiv.appendChild(newButton)
    addedProduct.push(addProduct)
    button.remove()
    console.log(addedProduct)


    //removing game if clicked
    newButton.onclick = function(){
        productCount -= 1
        addedProduct.pop(addProduct)
        newButton.remove()
        productDiv.appendChild(button)
        gamePrice.innerHTML = "Price: " + productPrice + " $"
        console.log(addedProduct)
    }

}
