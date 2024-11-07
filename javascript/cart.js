
//making the cart
let cart = []


//Retrieving added products
const added = JSON.parse(sessionStorage.getItem("product"))


//adding the retrieved product to our cart
cart.push(added)

localStorage.setItem("myCart", JSON.stringify(cart))
sessionStorage.clear()

const myCart = JSON.parse(localStorage.getItem("myCart"))
console.log(myCart)
