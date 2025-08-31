import Item from "../model/item.js";

async function createItem(name, price, quantity) {
    return new Item(name, price, quantity)
}

export default createItem;
