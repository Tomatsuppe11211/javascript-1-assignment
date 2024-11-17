
/*getting added products*/
const addedProducts = JSON.parse(localStorage.getItem("products"))


/*Adding the products from the API*/
let products = []

/*Sending information about the chosen product to the product page*/
let seeProduct = []

//-------------------------------------------------------------------------------------------------------------

//connecting with the API URL:
const getGames = async() => {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const data = await fetch(url)
    const json = await data.json()

    products = json


//--------------------------------------------------------------------------------------------------------------
    /*adding elements from the HTML file*/
    const rows = document.getElementById("section-1")


    // getting checkboxes
    const sportCheck = document.getElementById("sports")
    const adventureCheck = document.getElementById("adventure")   
    const actionCheck = document.getElementById("action")
    const horrorCheck = document.getElementById("horror")
    const sortButton = document.getElementById("sortButton")

//-------------------------------------------------------------------------------------------------------------

//adding products to the page
let gameCount = 0

for(let i = 0; i < products.length; i++){ 
    gameCount += 1
    
    const gameImage = document.createElement("img")
        gameImage.src = products[i].image
        rows.appendChild(gameImage)

        gameImage.onclick = function(){
            const chosenProduct = products[i]
            console.log(chosenProduct)
    
            seeProduct.push(chosenProduct)
            sessionStorage.setItem("see", JSON.stringify(chosenProduct))
            window.location.href="product/index.html"  
        }
}



//---------------------------------------------------------------------------------------------------------------

//sorting and displaying games based on genres
sortButton.onclick = function(){

    //removing old products
    for(let i = 0; i < gameCount; i++){
        rows.removeChild(rows.lastElementChild)
    }
    gameCount = 0


    //adding sports games if checked
    if(sportCheck.checked == true){ 
        for(let i = 0; i < products.length; i++){
            if(products[i].genre == "Sports"){
                const gameImage = document.createElement("img")
                    gameImage.src= products[i].image
                    rows.appendChild(gameImage)
                    gameCount += 1 
                

                gameImage.onclick = function(){
                    const chosenProduct = products[i]
                    console.log(chosenProduct)
                
                    seeProduct.push(chosenProduct)
                    sessionStorage.setItem("see", JSON.stringify(chosenProduct))
                    window.location.href="product/index.html"  
                }
            }
        }
    }


    //adding adventure games if checked
    if(adventureCheck.checked == true){
        for(let i = 0; i < products.length; i++){
            if(products[i].genre == "Adventure"){
                const gameImage = document.createElement("img")
                    gameImage.src= products[i].image
                    rows.appendChild(gameImage)
                    gameCount += 1  

                gameImage.onclick = function(){
                    const chosenProduct = products[i]
                    console.log(chosenProduct)
                
                    seeProduct.push(chosenProduct)
                    sessionStorage.setItem("see", JSON.stringify(chosenProduct))
                    window.location.href="product/index.html"  
                } 
            }
        }    
    }


    //adding action games if checked
    if(actionCheck.checked == true){
        for(let i = 0; i < products.length; i++){
            if(products[i].genre == "Action"){
                const gameImage = document.createElement("img")
                    gameImage.src= products[i].image
                    rows.appendChild(gameImage) 
                    gameCount += 1
                    
                gameImage.onclick = function(){
                    const chosenProduct = products[i]
                    console.log(chosenProduct)
                
                    seeProduct.push(chosenProduct)
                    sessionStorage.setItem("see", JSON.stringify(chosenProduct))
                    window.location.href="product/index.html"  
                }
            }
        }
    }
        

    //adding horror games if checked
    if(horrorCheck.checked == true){
        for(let i = 0; i < products.length; i++){
            if(products[i].genre == "Horror"){
                const gameImage = document.createElement("img")
                    gameImage.src= products[i].image
                    rows.appendChild(gameImage)
                    gameCount += 1

                gameImage.onclick = function(){
                    const chosenProduct = products[i]
                    console.log(chosenProduct)
                
                    seeProduct.push(chosenProduct)
                    sessionStorage.setItem("see", JSON.stringify(chosenProduct))
                    window.location.href="product/index.html"  
                }
            }
        }
    }

    
    //If every genre is unchecked, all games will be added back to the page
    if (sportCheck.checked == false && adventureCheck.checked == false && actionCheck.checked == false && horrorCheck.checked == false){
        for(let i = 0; i < products.length; i++){
            const gameImage = document.createElement("img")
                    gameImage.src= products[i].image
                    rows.appendChild(gameImage)
                    gameCount += 1

                gameImage.onclick = function(){
                    const chosenProduct = products[i]
                    console.log(chosenProduct)
                
                    seeProduct.push(chosenProduct)
                    sessionStorage.setItem("see", JSON.stringify(chosenProduct))
                    window.location.href="product/index.html"  
                    }
        }
    }

}


}


getGames()
