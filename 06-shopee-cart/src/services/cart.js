export async function addItem(userCart, item) {
    userCart.push(item)
}

export async function deleteItem(userCart, name) {

}

export async function removeItem(userCart, index) {

}

export async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}