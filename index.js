import express from 'express';
import  cors from 'cors';
import database from './src/infra/sqlite-db.js'

const app = express();

import usuario from './src/controllers/usuario-controller.js'; usuario(app);
import tarefa from './src/controllers/tarefa-controller.js'; tarefa(app);



//middleware

app.use(express.json());
app.use(cors) // qual a diferença entre app.use & usuario(app)
usuario(app,database)
tarefa(app,database)

app.listen(3000, ()=> {                             //arrow function -  ligando o servidor
    const newLocal = `Express started at http://localhost:3000`;
    console.log(newLocal);
});