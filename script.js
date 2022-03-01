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
        console.log(this.arrayProdutos)

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
        
    }
}

let produto = new Produto()

