
class Vendas {
    constructor(){
        this.id = 1
        this.arrayVendas = []
        this.editId = null
    }

    adicionar(){
        let itens = this.lendoDados()
            if(this.validacao(produto)){
                if(this.editId == null){
                    this.acrescentar(produto)
                }
            }
            listaConteudoTabela()
            excluir()
        
    }

    lendoDados(){
        let item = {}
        item.id = this.id
        item.nomeProduto = document.getElementById('nomeProduto').value 
        item.valor = document.getElementById('preco').value

        return item
    }

    acrescentar(item){
        item.preco = parseFloat(item.preco)
        this.arrayVendas.push(item)
        this.id++

    }

    listaConteudoTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i=0; i<this.arrayVendas.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayVendas[i].id
            td_produto.innerText = this.arrayVendas[i].nomeProduto
            td_preco.innerText = this.arrayVendas[i].preco

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/editar-arquivo.png'
            imgEdit.setAttribute('onclick', 'produto.editar('+ JSON.stringify(this.arrayVendas[i]) + ')')

            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'img/excluir.png'
            imgExcluir.setAttribute('onclick','produto.deletar('+ this.arrayVendas[i].id +')')

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgExcluir)

            
            
        }
    }
    validacao(item) {
        let msg = ''
        if(item.nomeProduto == ''){
        msg += 'informe o nome do produto \n'
        }

        if(item.preço == ''){
            msg += 'Informe o valor do produto \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    excluir(id){
        if(confirm('Deseja realmente deletar o produto do ID ' + id)){
            let tbody = document.getElementById('tbody')
            for(let i = 0; i < this.arrayVendas.length; i++){
                if(this.arrayVendas[i].id == id){
                    this.arrayVendas.splice(i,1)
                    tbody.deleteRow(i)
                }
            }      
        }   
    } 
}

let vendas = new Vendas()