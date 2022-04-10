

class Produto {



    constructor(){
        this.id = 1
        this.arrayProdutos = []
        this.editId = null
        
        

    }

    salvar(){
        let produto = this.lerDados()
        if(this.validaCampo(produto)){
            if(this.editId == null){
                this.adicionar(produto)
            } else [
                this.atualizar(this.editId, produto)
            ]
      
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
            imgEdit.setAttribute('onclick', 'produto.editar('+ JSON.stringify(this.arrayProdutos[i]) + ')')

            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'img/excluir.png'
            imgExcluir.setAttribute('onclick','produto.deletar('+ this.arrayProdutos[i].id +')')

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgExcluir)

            
            
        }
    }

    adicionar (produto){
        produto.preço = parseFloat(produto.preço)
        this.arrayProdutos.push(produto)
        this.id++
    }

    editar(dados){
        this.editId = dados.id
        document.getElementById('produtos').value = dados.nameProduto
        document.getElementById('preço').value = dados.preço
        document.getElementById('btn1').innerText = 'Atualizar'
    }

    atualizar(id, produto){
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nameProduto = produto.nameProduto
                this.arrayProdutos[i].preço = produto.preço
            }
        }
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
        document.getElementById('btn1').innerHTML = 'Salvar'
        this.editId = null

    }
    deletar(id){
        if(confirm('Deseja realmente deletar o produto do ID ' + id)){
            let tbody = document.getElementById('tbody')
            for(let i = 0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id == id){
                    this.arrayProdutos.splice(i,1)
                    tbody.deleteRow(i)
                }
            }      
        }   
    } 
    
   
}

let produto = new Produto()

// código abaixo colocar informações no localstorage

const localstorageProdutos = () => localStorage.setItem('produtos', JSON.stringify(arrayProdutos))

/*const produtoLocalStorage = inputNomeProduto.value.trim()
const valorLocalStorage = inputValorProduto.value.trim()
const addLocalStorage = {
    produto: produtoLocalStorage,
    valor: Number(valorLocalStorage)
}*/






