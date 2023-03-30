import { useState } from "react";

// Updating player name object with preserving prev objects
const [game, setGame] = useState({
    id:1,
    player: {
        name:"john",
    }
});

const handleUpdate = () => {
    setGame({...game, player:{...game.player, name: 'Bob'}})
}
 

// Updating array of toppings with perserving preveious state
const [pizza, setPizza] = useState({
    name: 'Spicy Pepporoni',
    toppings: ['Mashroom']
});

const handleClick = () => {
    setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']})
}

// Updating object in array, a complex structure using map method
const [cart, setCart] = useState({
    discount: -1,
    items: [
        {id: 1, title: 'Product 1', quantity: 1},
        {id: 2, title: 'Product 2', quantity: 1}
    ]
})

const handleCart = () => {
    setCart({
        ...cart, items: cart.items.map(item=> item.id === 1 ? {...item, quantity: item.quantity+1} : item)
    })
}