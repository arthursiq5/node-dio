export default class Item {
    constructor(nome, valor = 0, quantidade = 1) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }

    subtotal() {
        return this.valor * this.quantidade;
    }
}
