class UsuarioDao{
    constructor(bd) {
        this.bd = bd;
        
    }
    listarUsuario(){
        return new  Promise(function(resolve,reject){
            this.bd.all(`SELECT * FROM USUARIOS`, (error, resultado)=>{
                if(error){
                    reject('Erro ao selecionar banco')
                }else{
                    resolve(resultado);
                }
            })
        })
    }
}

export default UsuarioDao;