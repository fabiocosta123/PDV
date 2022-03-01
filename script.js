class Produto {



    constructor(){
        this.id = 1
        this.arrayProdutos = []
        

    }

    salvar(){
        let produto = this.lerDados()
        if(this.validaCampo(produto)){
          this.adicionar(produto)
        }
        this.listaTabela()
        this.cancelar()

    }

    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i=0; i<this.arrayProdutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nameProduto
            td_preco.innerText = this.arrayProdutos[i].preço

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/editar-arquivo.png'

            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'img/excluir.png'

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgExcluir)
            
        }
    }

    adicionar (produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    lerDados() {
        let produto = {}
        produto.id = this.id 
        produto.nameProduto = document.getElementById('produtos').value
        produto.preço= document.getElementById('preço').value


        return produto 

    }

    validaCampo(produto) {
        let msg = ''
        if(produto.nameProduto == ''){
        msg += 'informe o nome do produto \n'
        }

        if(produto.preço == ''){
            msg += 'Informe o valor do produto \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    cancelar(){
        document.getElementById('produtos').value = ''
        document.getElementById('preço').value = ''

    }
}

let produto = new Produto()

