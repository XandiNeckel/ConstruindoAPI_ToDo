import express from 'express';
const app = express(); //Instancia

//GET = PEGAR ||| req = requisição | res = resposta
app.get('/', (req,res)=>{ //criando rotas das entidades
    res.send('Olá mundo');
    setTimeout(() =>{console.log('Aguardou o tempo')}, 3000);
})

app.listen(3000,()=>{//criando rotas das entidades
    console.log('rodando servidor na porta 3000');
});

app.get('/aluno',(req,res) =>{//criando rotas das entidades
    res.send('rota do aluno')
});

app.get('/facilitador',(req,res) =>{//criando rotas das entidades
    res.send('rota do facilitador')
})