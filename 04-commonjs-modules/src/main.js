const p = require('./services/products')

async function main() {
    console.log(await p.getFullName(123, 'teste'))
    console.log(await p.getFullName(456, 'teste'))
    console.log('Olá mundo');
}

main();
