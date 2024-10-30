


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

    for (let i = 0; i < 5; i++){
        const gameImage = document.createElement("img")

        gameImage.src = products[i].image
        
        /*Adding the images to the page*/
        firstRow.appendChild(gameImage)


        /*Preparing for adding content to the product page*/
        const gameInfo = document.getElementById("gameInfo")
        
        /**/
        gameImage.onclick = function() {
            /*window.location.href = "product/index.html"*/
            const gameTitle = products[i].title
            const gameDescription = products[i].description
            const gamePrice = products[i].price

            if(products[i].onSale == true){console.log("SALE!")} else {console.log("Not on sale")}

        }
        


        console.log(products[i].title) 
    }

    
    for (let i = 5; i < 10; i++){
        const gameImage = document.createElement("img")

        gameImage.src = products[i].image
        gameImage.onclick = function() {window.location.href = "product/index.html"}

        secondRow.appendChild(gameImage)

        console.log(products[i].title) 
    }



    
}

getGames()


