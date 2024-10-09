

//This doument is collecting functions and information from every other js documents
// This is for more controll over what is happening


//connecting with the API URL:
const apiUrl = "https://api.noroff.dev/api/v1/gamehub";






//Importing game information
import{games} from'./products.js';
// Control check = working this far.




fetch(apiUrl)





//tetsing some basic async syntax
function display(some){
    document.getElementById("first").innerHTML = some;
}

async function tellMe(){return("Hello");}

tellMe().then(
    function(value) {display(value);},
    function(error) {display(error);}
)

//Result for this is the first box now have the word 'Hello' in it.