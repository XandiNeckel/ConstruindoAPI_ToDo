let id = 0;
export class usuario{
    constructor(nome,email,senha) {
        this.id=id++;
        this.nome = nome,
        this.email = email,
        this.senha = this.validarSenha(senha)
    }
}
    function validarSenha(senha) {
        if(senha.length >= 8){
            return senha
        }else{
            throw new Error('Senha deve conter 8 ou mais caracteres')
        }
    }