const p = require('./services/products')
const config = require('./services/config')
const { connectToDatabase, disconnectDatabase } = require('./services/database')

async function main() {
    connectToDatabase('teste')
    console.log(await p.getFullName(123, 'teste'))
    console.log(await p.getFullName(456, 'teste'))
    console.log('Olá mundo');

    console.log('----------------------')

    console.log(config)
    disconnectDatabase()
}

main();
