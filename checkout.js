function calcularSubtotal (itens) {

}

function contarItens (itens) {

}

function aplicarCupom (subtotal, codigo) {
    if (codigo === 'DESC10') {
        subtotal = subtotal * 0.90;
    } else if (codigo === 'DESC20') {
        if(subtotal >= 200){
            subtotal = subtotal * 0.80;
        }
    } else if (codigo === 'FRETEGRATIS') {
        subtotal = 15.00;
    } else {
        subtotal === 0 ? 0 : subtotal;
    }
    return subtotal;
 }

function finalizarCompras (itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0};
}

const itens = [
    { nome: "camiseta", preco: 50, quantidade: 2 },
    { nome: "tenis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));