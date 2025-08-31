import { addItem, calculateTotal } from "./services/cart.js";
import createItem from "./services/item.js";

const cart = []

console.log('hello shopee');

const item1 = await createItem('hotwheels ferrari', 20.99, 1)
const item2 = await createItem('hotwheels lamborghini', 39.99, 3)

await addItem(cart, item1)
await addItem(cart, item2)

console.log(await calculateTotal(cart));
