export const tarefa = (app)=>{
    app.get('/tarefa',(req, res)=>{
        res.send('rota tarefa')
    })
}

// module.exports = tarefa; //exportando a função