import { addItem, calculateTotal, deleteItem, removeItem } from "./services/cart.js";
import createItem from "./services/item.js";

const cart = []

console.log('hello shopee');

const item1 = await createItem('hotwheels ferrari', 20.99, 1)
const item2 = await createItem('hotwheels lamborghini', 39.99, 3)

await addItem(cart, item1)
await addItem(cart, item2)

console.log(await calculateTotal(cart));

await deleteItem(cart, item1.nome)

console.log(await calculateTotal(cart));
