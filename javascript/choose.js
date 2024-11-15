
/*getting added products*/
const addedProducts = JSON.parse(localStorage.getItem("products"))
if(addedProducts != null){console.log(addedProducts)}


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
    const gameDisplay = document.createElement("div")


    // getting checkboxes
    const sportCheck = document.getElementById("sports")
    const adventureCheck = document.getElementById("adventure")   
    const actionCheck = document.getElementById("action")
    const horrorCheck = document.getElementById("horror")
    const sortButton = document.getElementById("sortButton")
    const resetButton = document.getElementById("resetButton")

//-------------------------------------------------------------------------------------------------------------

//function for sending the user to the product page
function sendToProductPage() {
        const chosenProduct = products[i]
        console.log(chosenProduct)

        seeProduct.push(chosenProduct)
        sessionStorage.setItem("see", JSON.stringify(chosenProduct))
        window.location.href="product/index.html" 
        }    

//---------------------------------------------------------------------------------------------------------------    
let titles = []
let gameCount = 0

for(let i = 0; i < products.length; i++){
    
    titles.push(products[i].title)
    titles.sort()
    gameCount += 1
    

    const gameImage = document.createElement("img")
        gameImage.src = products[i].image
        rows.appendChild(gameImage)
}
console.log(titles)







sortButton.onclick = function(){
    if(gameCount == 10){
            for(let i = 0; i < products.length; i++){
                rows.removeChild(rows.lastElementChild) 
                gameCount -= 1 
                console.log(gameCount)
            }  
            
    }




    let sportsCount = 0

    if(sportsCount != 1){
        if(sportCheck.checked == true){ 
            for(let i = 0; i < products.length; i++){
                if(products[i].genre == "Sports"){
                    const gameImage = document.createElement("img")
                        gameImage.src= products[i].image
                        rows.appendChild(gameImage)
                }
            }sportsCount = 1
            gameCount += 3
            
        }
        
    }
        




        if(adventureCheck.checked == true){
            for(let i = 0; i < products.length; i++){
                if(products[i].genre == "Adventure"){
                    const gameImage = document.createElement("img")
                        gameImage.src= products[i].image
                        rows.appendChild(gameImage)
                        
                }
            }
            gameCount += 2
        }

        console.log(gameCount)
    }
        
            
        


    resetButton.onclick = function(){
        if(gameCount != 0){
           for(let i = 0; i < products.length; i++){
               rows.removeChild(rows.lastElementChild)
               gameCount = 0
            } 
        }console.log(gameCount) 
    }
}







    

getGames()
