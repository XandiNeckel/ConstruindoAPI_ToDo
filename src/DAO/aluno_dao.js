class UsuarioDao{
    constructor(bd) {
        this.bd = bd;
        
    }
    listarUsuario(){
        return new  Promise(function(resolve,reject){
            this.bd.all(`SELECT * FROM USUARIOS`, (error, resultado)=>{
                if(error){
                    res.send('Erro ao selecionar banco')
                }else{
                    res.send(resultado);
                }
            })
        })
    }
}