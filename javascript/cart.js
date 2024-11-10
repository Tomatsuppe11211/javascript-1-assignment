

/*Retrieving products*/
let cart = JSON.parse(localStorage.getItem("products"))


/*Creating a message for the user if no products are detevted*/
function message(){
    const message = document.createElement("p")
    message.innerHTML = "There are no products in your cart"
    cartSection.appendChild(message)  
}


let sum = 0;





/*Marking where i want to put the users products*/
const cartSection = document.getElementById("displayCart")


//making message if cart is empty
function giveMessage(){
    const message = document.createElement("p")
    message.innerHTML = "Your cart is empty"
    cartSection.appendChild(message)
}


if (cart != null){
    for(let i = 0; i < cart.length; i++){
        /*Adding the products to the cart page*/
        const cartinfo = document.createElement("div")
            cartinfo.className = "cartInfo"
        const gameImage = document.createElement("img")
            gameImage.src = cart[i].image
        const gameInfo = document.createElement("div") 
            gameInfo.className = "product" 
        const gameTitle = document.createElement("h3")
            gameTitle.innerHTML = cart[i].name
        const gamePrice = document.createElement("p")
            if(cart[i].sale == true){
                gamePrice.innerHTML = "Price: " + cart[i].discount + " $"
                sum += cart[i].discount
            } else {
                gamePrice.innerHTML = "price: " + cart[i].price + " $"
                sum += cart[i].price
            }
        const trashIcon = document.createElement("i")
            trashIcon.className = "fa-solid fa-trash"
    
    
        cartSection.appendChild(cartinfo)
        cartinfo.appendChild(gameImage)
        cartinfo.appendChild(gameInfo)
        gameInfo.appendChild(gameTitle)
        gameInfo.appendChild(gamePrice)
        cartinfo.appendChild(trashIcon)

        trashIcon.onclick = function(){
            /*if(cart[i].sale == true){
                sum -= cart[i].discount
            } else {
                sum -= cart[i].price
            }
            console.log(sum.toFixed(2))*/

            //cartinfo.remove()
            cart.splice(i-2, i)
            console.log(cart)

            //localStorage.clear("products")
            //localStorage.setItem("products", JSON.stringify(cart))
        } 
    }     
} else {
    giveMessage()
}


console.log(cart)

console.log(sum.toFixed(2))