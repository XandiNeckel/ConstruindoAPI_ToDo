import express from 'express';
const bdSQLite = require('./infra/sqlite-db.js')

const app = express();

import {usuario} from './controllers/usuario-controller.js'; usuario(app);
import {tarefa} from './controllers/tarefa-controller.js'; tarefa(app);


// const tarefa = require ('./)
// tarefa (app)
//import tarefa from './'
//tarefa (app)
usuario(app)
tarefa(app)

app.listen(3000, () => {console.log('funciona')});