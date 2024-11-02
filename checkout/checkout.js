let products = []
let myCart = [games]

const getGames = async() => {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const data = await fetch(url)
    const json = await data.json()

    products = json

    let games = window.sessionStorage.getItem("product")

    console.log(games)
}



getGames()