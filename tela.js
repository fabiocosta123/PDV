
class PDV {

    constructor(){

    }

    cadastrar(){
        let cadastro = document.getElementById('cadastrar')
        if(confirm('Deseja cadastrar novo produto')){
            if(confirm == true){
                window.open('cadastro.js')
            }
        }
    }
}