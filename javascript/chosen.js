let products = []

const showGame = async() => {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const data = await fetch(url)
    const json = await data.json()

    products = json
 
    

    /*marking elements on the page that is to be changed when i click on them on the first index page*/
    const gameImage = document.getElementById("gameImage")
    const gameTitle = document.getElementById("gameTitle")
    const gameDescription = document.getElementById("gameDescription")
    const gamePrice = document.getElementById("gamePrice")
    


    /*retrieving items from last page*/
    const image = window.sessionStorage.getItem("image")
    const title = window.sessionStorage.getItem("title")
    const description = window.sessionStorage.getItem("description")
    const price = window.sessionStorage.getItem("price")
    const onSale = window.sessionStorage.getItem("onSale")

    console.log(onSale)


    gameTitle.innerHTML = title
    gameDescription.innerHTML = description
    gameImage.src = image


    gamePrice.innerHTML = "Price: " + price + " $"
}






/*Adding a function to the button*/
const button = document.getElementById("add-button")
button.addEventListener("click", addProduct)

function addProduct(){
    console.log("Game added")
    button.removeEventListener("click", addProduct)
    button.innerHTML = "Remove from cart"
    button.addEventListener("click", removeProduct)

    function removeProduct(){
        button.removeEventListener("click", removeProduct)
        console.log("Game removed")
        button.addEventListener("click", addProduct)
        button.innerHTML = "Add to cart"
    }
}












showGame()