


/*Adding the products from the API*/
let products = []

//connecting with the API URL:
const getGames = async() => {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const data = await fetch(url)
    const json = await data.json()

    products = json



    /*adding elements from the HTML file*/
    const firstRow = document.getElementById("section-1")
    const selection = document.getElementById("filter")
    const filterButton = document.getElementById("sortButton")


    /*collecting games and displaying them. making sure not to repeat games multiple times*/
    for (let i = 0; i < products.length; i++){
        const gameImage = document.createElement("img")

        //Adding game images on the home page
        gameImage.src = products[i].image

        /*Adding the images to the page*/
        firstRow.appendChild(gameImage)
        
        
        
                





        /*Making each image send the user to the product page*/
        gameImage.onclick = function() {
            /*storing the data to the clicked product. Sending them to the product page*/
            if(products[i].title == products[i].title){
                if(products[i].onSale == true){
                    
                    const price = products[i].price - products[i].discountedPrice
                    
                    sessionStorage.setItem("title", products[i].title)
                    sessionStorage.setItem("image", products[i].image)
                    sessionStorage.setItem("description", products[i].description)
                    sessionStorage.setItem("price", price)
                    window.location.href = "product/index.html"
                } else {
                    sessionStorage.setItem("title", products[i].title)
                    sessionStorage.setItem("image", products[i].image)
                    sessionStorage.setItem("description", products[i].description)
                    sessionStorage.setItem("price", products[i].price)
                    window.location.href = "product/index.html"
                }    
            } else{
                alert("Sorry but this item is not available")
            }  
        }         
    }
}

getGames()


