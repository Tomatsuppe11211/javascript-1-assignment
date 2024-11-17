

/*Retrieving products*/
let cart = JSON.parse(localStorage.getItem("products"))


let sum = 0;

if(cart != null){
  for(let i = 0; i < cart.length; i++){
if(cart[i].onSale == true){sum += cart[i].discountedPrice} else {sum += cart[i].price}
  }
}

//-------------------------------------------------------------------------------------------------------

/*Marking where i want to put the users products*/
const cartSection = document.getElementById("displayCart")

const myCart = document.getElementById("myCart")

const showTotal = document.getElementById("showTotal")
showTotal.innerHTML = "Total: " + sum.toFixed(2) + " $"

/*Creating a message for the user if no products are detected*/
function message(){
    const message = document.createElement("p")
    message.innerHTML = "There are no products in your cart"
    myCart.appendChild(message)  
}

//--------------------------------------------------------------------------------------------



function showCart(){

let price = 0

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
            } else {
                gamePrice.innerHTML = "Price: " + cart[i].price + " $"
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
            sum = 0

            delete cart[i]
            cart.sort()
            cart.pop()


            for(let i = 0; i < cart.length; i++){
                if(cart[i].onSale == true){
                    sum += cart[i].discountedPrice
                } else {
                    sum += cart[i].price
                }  
            }
            
            showTotal.innerHTML = "Total: " + sum.toFixed(2) + " $"
            


            for(let i = 0; i <= cart.length; i++){myCart.removeChild(myCart.lastChild)} 
            

            showCart()
            
            if(cart.length == 0){message(); checkoutButton.remove()}
            localStorage.clear("products")
            localStorage.setItem("products", JSON.stringify(cart))
        }  
    }

    

}





}
showCart()

if(cart.length != 0){
    const checkoutButton = document.createElement("button")
        checkoutButton.id = "checkoutButton"
        checkoutButton.innerHTML = "Purchase"
        cartSection.appendChild(checkoutButton)

    checkoutButton.onclick = function(){
        localStorage.clear("products")
        cart = []
        localStorage.setItem("products", JSON.stringify(cart))
        window.location.href = "../checkout/confirmation/index.html"
    }

} else {message()}
