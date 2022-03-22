let arrayProdutos = []
function chama (){
    adicionar()
    compra()
    listaCompra()
}
function compra (){
    let qtd = document.getElementById('quantidade').value 
    let preco = document.getElementById('preco').value 
    let tpreço = qtd * preco
    alert(tpreço)
}
function adicionar (produto){
    produto.preço = parseFloat(produto.preço)
    this.arrayProdutos.push(produto)
    this.id++
}

function listaCompra(){
    let corpo = document.getElementById('corpo')
    corpo.innerText = ''
        for(let i = 0; i < arrayProdutos.length; i++){
            let tr = corpo.insertRow()
            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_acoes = tr.insertCell()
            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nameProduto
            td_preco.innerText = this.arrayProdutos[i].preço
            
            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/editar-arquivo.png'
            imgEdit.setAttribute('onclick', 'produto.editar('+ JSON.stringify(this.arrayProdutos[i]) + ')')

            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'img/excluir.png'
            imgExcluir.setAttribute('onclick','produto.deletar('+ this.arrayProdutos[i].id +')')

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgExcluir)
        }
    }




