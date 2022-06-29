const bd = {
    'usuario':[],
    'tarefa':[]
};

const usuario1 = (app) => { //SELECIONANDO O BANCO NO SQLite
    app.get('/usuario', (req, res) => {
        bdSQLite.all(`SELECT * FROM USUARIOS`, (error, resultado) => {
            if (error) {
                res.send('Erro ao selecionar o banco')
            } else {
                res.send(resultado);
            }
        })
    })
} // FINAL DO COD PARA SELECIONAR O BANCO

export default bd;
