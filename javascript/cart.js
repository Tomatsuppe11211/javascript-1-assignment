

/*Retrieving products*/
let cart = JSON.parse(localStorage.getItem("products"))


let sum = 0;


/*Marking where i want to put the users products*/
const cartSection = document.getElementById("displayCart")


/*Creating a message for the user if no products are detected*/
function message(){
    const message = document.createElement("p")
    message.innerHTML = "There are no products in your cart"
    cartSection.appendChild(message)  
}





if (cart.length != null){
    
    for(let i = 0; i < cart.length; i++){
        //createing the elements for each product in our cart
        const list = document.createElement("div")
            list.className = "cartInfo"
        const gameImage = document.createElement("img")
            gameImage.src = cart[i].image
        const gameInfo = document.createElement("div")
            gameInfo.className = "product"
        const gameTitle = document.createElement("h3")
            gameTitle.innerHTML = cart[i].name
        const gamePrice = document.createElement("p")
            if(cart[i].sale === true){
                gamePrice.innerHTML = "Price: " + cart[i].discount + " $"
                sum += cart[i].discount
            } else {
                gamePrice.innerHTML = "Price: " + cart[i].price + " $"
                sum += cart[i].price
            }
        const trashIcon = document.createElement("i")
            trashIcon.className = "fa-solid fa-trash"

        //displaying all products to the page
        cartSection.appendChild(list)
            list.appendChild(gameImage)
            list.appendChild(gameInfo)
                gameInfo.appendChild(gameTitle)
                gameInfo.appendChild(gamePrice)
            list.appendChild(trashIcon)


        //Removing items from cart
        trashIcon.onclick = function() {
            console.log(cart[i].name + " removed")
            cart[0] = cart[i]
            cart.shift()

            console.log(cart)

            //localStorage.clear("products")
            //localStorage.setItem("products", JSON.stringify(cart))
        }

    }

    console.log(sum.toFixed(2))

} else {
    message()
}



console.log(cart)