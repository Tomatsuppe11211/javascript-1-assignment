


/*Adding the products from the API*/
let products = []

//connecting with the API URL:
const getGames = async() => {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const data = await fetch(url)
    const json = await data.json()

    products = json
    

    /*fetching games for each rows and adding them to the page*/
    const firstRow = document.getElementById("section-1")
    const secondRow = document.getElementById("section-2")


















    /*Adding the first row of games*/
    for (let i = 0; i < 5; i++){
        const gameImage = document.createElement("img")

        gameImage.src = products[i].image
        
        /*Adding the images to the page*/
        firstRow.appendChild(gameImage)
        
        
        /*Makeing each image send the user to the product page*/
        gameImage.onclick = function() {
            /*storing the data to the clicked product. Sending them to the product page*/
            if(products[i].title == products[i].title){
                if(products[i].onSale == true){
                    
                    const price = products[i].price - products[i].discountedPrice
                    
                    window.sessionStorage.setItem("title", products[i].title)
                    window.sessionStorage.setItem("image", products[i].image)
                    window.sessionStorage.setItem("description", products[i].description)
                    window.sessionStorage.setItem("price", price)
                    window.location.href = "product/index.html"
                } else {
                    window.sessionStorage.setItem("title", products[i].title)
                    window.sessionStorage.setItem("image", products[i].image)
                    window.sessionStorage.setItem("description", products[i].description)
                    window.sessionStorage.setItem("price", products[i].price)
                    window.location.href = "product/index.html"
                }    
            } else{
                alert("Sorry but this item is not available")
            }
        }   

        console.log(products[i].title)
    }



















    
    /*Adding the second row of games*/
    for (let i = 5; i < 10; i++){
        const gameImage = document.createElement("img")

        gameImage.src = products[i].image

        /*Adding images to the page*/
        secondRow.appendChild(gameImage)

        /*Makeing each image send the user to the product page*/
        gameImage.onclick = function() {
            /*storing the data to the clicked product. Sending them to the product page*/
            if(products[i].title == products[i].title){
                if(products[i].onSale == true){
                    
                    const price = products[i].price - products[i].discountedPrice
                    
                    window.sessionStorage.setItem("title", products[i].title)
                    window.sessionStorage.setItem("image", products[i].image)
                    window.sessionStorage.setItem("description", products[i].description)
                    window.sessionStorage.setItem("price", price)
                    window.sessionStorage.setItem("onSale", "true")
                    window.location.href = "product/index.html"
                } else {
                    window.sessionStorage.setItem("title", products[i].title)
                    window.sessionStorage.setItem("image", products[i].image)
                    window.sessionStorage.setItem("description", products[i].description)
                    window.sessionStorage.setItem("price", products[i].price)
                    window.sessionStorage.setItem("onSale", "false")
                    window.location.href = "product/index.html"
                }    
            } else{
                alert("Sorry but this item is not available")
            }
        }

        
    }

}

getGames()


