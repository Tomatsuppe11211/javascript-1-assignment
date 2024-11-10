
/*getting added products*/
const addedProducts = JSON.parse(localStorage.getItem("products"))
if(addedProducts != null){console.log(addedProducts)}


/*Adding the products from the API*/
let products = []

/*Sending information about the chosen product to the product page*/
let seeProduct = []

//connecting with the API URL:
const getGames = async() => {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const data = await fetch(url)
    const json = await data.json()

    products = json



    /*adding elements from the HTML file*/
    const firstRow = document.getElementById("section-1")


    /*collecting games and displaying them. making sure not to repeat games multiple times*/
    for (let i = 0; i < products.length; i++){
        const gameImage = document.createElement("img")

        //Adding game images on the home page
        gameImage.src = products[i].image

        /*Adding the images to the page*/
        firstRow.appendChild(gameImage)        



        /*Making each image send the user to the product page*/
        gameImage.onclick = function() {
            const chosenProduct = {
                name: products[i].title, 
                price: products[i].price,
                description: products[i].description,
                image: products[i].image,
                sale: products[i].onSale,
                discount: products[i].discountedPrice
            }

            seeProduct.push(chosenProduct)
            sessionStorage.setItem("see", JSON.stringify(chosenProduct))
            window.location.href="product/index.html" 
        }         
    }
}

getGames()


