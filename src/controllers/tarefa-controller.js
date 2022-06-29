const tarefa = (app)=>{
    app.get('/tarefa',(req, res)=>{
        res.send('rota tarefa')
    })
}

export default tarefa;

