


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
            /*window.location.href = "product/index.html"*/
        }   
    }

    
    /*Adding the second row of games*/
    for (let i = 5; i < 10; i++){
        const gameImage = document.createElement("img")

        gameImage.src = products[i].image

        /*Adding images to the page*/
        secondRow.appendChild(gameImage)

        /*Makeing each image send the user to the product page*/
        gameImage.onclick = function() {
            /*window.location.href = "product/index.html"*/
        }
    }

}

getGames()


