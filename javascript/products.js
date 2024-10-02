


// This file is just for adding all products


const pingPong = {
    id: "pingPong",
    title: "Ping Pong Championship",
    description: "Enter the world of Ping Pong Championship and compete against the world's best to become the ultimate champion in this exciting game.",
    genre: "Sports",
    released: "2005",
    ageRating: "3+",
    price:  14.99,
    discountedPrice: 4.79,
    onSale: true,
    image:  "https://static.cloud.noroff.dev/api/gamehub/0-ping-pong-championship.jpg",
    tags: ["gamehub", "game"],
    favorite: true
};



const superDuper = {
    id: "superDuper",
    title: "Super Duper",
    description: "Celebrate some of the world's supe duper Superheroes with augmented reality.",
    genre: "Adventure",
    released: "2006",
    ageRating: "3+",
    price:  15.99,
    discountedPrice: 15.99,
    onSale: false,
    image:  "https://static.cloud.noroff.dev/api/gamehub/1-super-duper.jpg",
    tags: ["gamehub", "game"],
    favorite: true
};



const assassin = {
    id: "assassin",
    title: "Assassin",
    description: "Create your own history as an assassin from 1770. Take part of an order trying to prevent the american revolution.",
    genre: "Adventure",
    released: "2007",
    ageRating: "16+",
    price:  19.99,
    discountedPrice: 5.50,
    onSale: true,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-assassin.jpg",
    tags: ["gamehub", "game"],
    favorite: true
};



const black = {
    id: "black",
    title: "Black",
    description: "Join the adventrue of Juan. Juan is a monster hunter andf is looking for Dracula. join Juan's adventure into the darkest night.",
    genre: "Action",
    released: "2009",
    ageRating: "12+",
    price:  15.99,
    discountedPrice: 15.99,
    onSale: false,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-black.jpg",
    tags: ["gamehub", "game"],
    favorite: true
}

const boxer = {
    id: "boxer",
    title: "Boxer",
    description: "Take place in the ring of legends. Make your own hero and become the next legend in the boxer hall of fame.",
    genre: "Adventure",
    released: "2007",
    ageRating: "16+",
    price:  12.99,
    discountedPrice: 12.99,
    onSale: false,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-boxer.jpg",
    tags: ["gamehub", "game"],
    favorite: true
}



const cyberpunk = {
    id: "cyberpunk",
    title: "Cyberpunk",
    description: "Ever dreamt of seeing the future? Your chance is now with this game set in the year 2149. Explore the future and take back controll over your hometown from the agressive robot nation.",
    genre: "Adventure",
    released: "2009",
    ageRating: "16+",
    price:  18.99,
    discountedPrice: 5.00,
    onSale: true,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-cyberpunk.jpg",
    tags: ["gamehub", "game"],
    favorite: true
}



const forgeLegend = {
    id: "forgeLegend",
    title: "Forge Legend",
    description: "MAke your magical path with this open world exploration game. Make your powerful character and make your nake known worldwide.",
    genre: "Adventure",
    released: "2010",
    ageRating: "12+",
    price:  14.99,
    discountedPrice: 4.99,
    onSale: true,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-forge-legend.jpg",
    tags: ["gamehub", "game"],
    favorite: true
}



const furious = {
    id: "furious",
    title: "Furious",
    description: "New Yorks famous gorilla Jambi has escaped the zoo and is running wild in the city. Gear up and help get Jambi back to his home.",
    genre: "Action",
    released: "2004",
    ageRating: "12+",
    price:  9.99,
    discountedPrice: 9.99,
    onSale: false,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-furious.jpg",
    tags: ["gamehub", "game"],
    favorite: true
}



const racing = {
    id: "racing",
    title: "Racing",
    description: "Join the world of formula 1. Becoma a racing legend. beat time records and race against the world most famous racers. Ready, set GO!",
    genre: "Sports",
    released: "2008",
    ageRating: "6+",
    price:  11.99,
    discountedPrice: 3.99,
    onSale: true,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-racing.jpg",
    tags: ["gamehub", "game"],
    favorite: true
}



const spaceWar = {
    id: "spaceWar",
    title: "Space War",
    description: "Explore the space. Join admiral Morgan to the battle of the species. Lead the humanity to triumph and conquest",
    genre: "Action",
    released: "2014",
    ageRating: "16+",
    price:  15.99,
    discountedPrice: 5.99,
    onSale: true,
    image: "https://static.cloud.noroff.dev/api/gamehub/1-spacewar.jpg",
    tags: ["gamehub", "game"],
    favorite: true
}







//exporting to the main document that will be connected to the main document.
export const games = [pingPong, superDuper, assassin, black, boxer, cyberpunk, forgeLegend, furious, racing, spaceWar];



