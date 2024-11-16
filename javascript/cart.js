

/*Retrieving products*/
let cart = JSON.parse(localStorage.getItem("products"))


let sum = 0;


/*Marking where i want to put the users products*/
const cartSection = document.getElementById("displayCart")

const myCart = document.getElementById("myCart")


/*Creating a message for the user if no products are detected*/
function message(){
    const message = document.createElement("p")
    message.innerHTML = "There are no products in your cart"
    myCart.appendChild(message)  
}

//--------------------------------------------------------------------------------------------



function showCart(){
if (cart != null){
      for(let i = 0; i < cart.length; i++){
        //createing the elements for each product in our cart
        const list = document.createElement("div")
            list.className = "cartInfo"
        const gameImage = document.createElement("img")
            gameImage.src = cart[i].image
        const gameInfo = document.createElement("div")
            gameInfo.className = "product"
        const gameTitle = document.createElement("h3")
            gameTitle.innerHTML = cart[i].title
        const gamePrice = document.createElement("p")
            if(cart[i].onSale == true){
                gamePrice.innerHTML = "Price: " + cart[i].discountedPrice + " $"
                sum += cart[i].discountedPrice
            } else {
                gamePrice.innerHTML = "Price: " + cart[i].price + " $"
                sum += cart[i].price
            }
        const trashIcon = document.createElement("i")
            trashIcon.className = "fa-solid fa-trash"




        //displaying all products to the page
        myCart.appendChild(list)
            list.appendChild(gameImage)
            list.appendChild(gameInfo)
                gameInfo.appendChild(gameTitle)
                gameInfo.appendChild(gamePrice)
            list.appendChild(trashIcon)



        //Removing items from cart
        trashIcon.onclick = function() {
            console.log(cart[i].title + " removed")
            
            delete cart[i]
            cart.sort()
            cart.pop()


            for(let i = 0; i <= cart.length; i++){
                myCart.removeChild(myCart.lastChild)
            } 
            
            
            
            console.log(cart)
            console.log(cart.length)

            showCart()
            
            if(cart.length == 0){message(); checkoutButton.remove()}
            
    }  
    }
    
            
            localStorage.clear("products")
            localStorage.setItem("products", JSON.stringify(cart))
        

}





}
showCart()




if(cart.length != 0){
    const checkoutButton = document.createElement("button")
        checkoutButton.id = "checkoutButton"
        checkoutButton.innerHTML = "Purchase"
        cartSection.appendChild(checkoutButton)

    checkoutButton.onclick = function(){
        window.location.href = "../checkout/confirmation/index.html"
    }

} else {message()}

    

    console.log(sum.toFixed(2))

console.log(cart.length)