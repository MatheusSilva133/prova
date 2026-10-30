function calcularSubtotal(itens) {
    let subtotal = 0
    for(const item of itens) {
        subtotal += item.preco * item.quantidade;
    }
    return subtotal;
}

function contarItens(itens) {
    let total = 0;

    for (let i = 0; i < itens.length; i++) {
        total += itens[i].quantidade;
    }

    return total;
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
    let subtotal = calcularSubtotal(itens);
    let total= aplicarCupom(subtotal, codigoCupom)
    let desconto = subtotal - total;
    return { subtotal: subtotal, desconto: desconto, total: total};
}

const itens = [
    { nome: "camiseta", preco: 50, quantidade: 2 },
    { nome: "tenis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompras(itens, "DESC10"));

//Realizado os Merges Manualmente