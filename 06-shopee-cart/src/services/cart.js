export async function addItem(userCart, item) {
    userCart.push(item)
}

export async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== 1) {
        userCart.splice(index, 1);
    }
}

export async function removeItem(userCart, index) {
    const deleteIndex = index - 1;

    if (deleteIndex >= 0 && deleteIndex < userCart.length) {
        userCart.splice(deleteIndex, 1);
        return;
    }
    userCart[0].reduzirQuantidade()
}

export async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}

export async function displayCart(userCart) {
    console.log('Shopee cart list:');
    userCart.forEach((item, index) => {
        console.log(`${ index + 1 }. ${ item.nome } - R$ ${ item.valor } |
            ${ item.quantidade }
        | x ${ item.subtotal() }\n`)
    })
    console.log(`Total: R$ ${await calculateTotal(userCart)}`);
    
    
}
