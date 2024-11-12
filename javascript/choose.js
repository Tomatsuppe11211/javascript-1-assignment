
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



    // getting checkboxes
    const sportCheck = document.getElementById("sports")
    const adventureCheck = document.getElementById("adventure")   
    const actionCheck = document.getElementById("action")
    const horrorCheck = document.getElementById("horror")

    


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

sportCheck.onclick = function(){
    if (sportCheck.checked == true){
        for (let i = 0; i < products.length; i++){
          if(products[i].genre == "Sports"){
                const gameImage = document.createElement("img")
                gameImage.src = products[i].image
                rows.appendChild(gameImage)
            }  
        }
    } else if (adventureCheck.checked == true){
        for (let i = 0; i < products.length; i++){
            if(products[i].genre == "Adventure"){
                  const gameImage = document.createElement("img")
                  gameImage.src = products[i].image
                  rows.appendChild(gameImage)
                  console.log("Adventure!")
              }  
          }
    }  
}









}
getGames()


