function pagar(){
    let tquantidade = document.getElementById('quantidade')
    let tvalor = document.getElementById('valor')
    let quantidade = Number(tquantidade.value)
    let valor = Number(tvalor.value)
    let total= quantidade * valor 
    total.innerHTML = `O valor a ser pago é de R$ ${total}`
    

}

