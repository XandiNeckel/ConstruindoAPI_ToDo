import chalk from 'chalk';
setTimeout(() =>{console.log('Temperatura Paciente')}, 3000);

const Paciente = new Promise((febril, naofebril) => {
    if (Paciente == true) {
        febril('Paciente Febril')
    } else {
        naofebril('Paciente não Febril')
    }
}).then((febril)=>{
    console.log(chalk.red('ALERTA'));

}).catch((naofebril)=>{
    console.log(chalk.green('INFO'));
})

