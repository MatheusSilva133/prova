function calcularSubtotal (itens) {
    let subtotal = 0

    for(let i = 0; i < itens.lenght; i++) {
        subtotal += itens[i].preco * itens[i].quantidade;
    }

    return subtotal;
}

function contarItens (itens) {
    let total = 0;

    for (let i = 0; i < itens.length; i++) {
        total += itens[i].quantidade;
    }

    return total;
}

function aplicarCupom (subtotal, codigo) {

}

function finalizarCompras (itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0};
}

const itens = [
    { nome: "camiseta", preco: 50, quantidade: 2 },
    { nome: "tenis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));