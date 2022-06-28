// setTimeout(() =>{console.log('Olá com delay de 5S')}, 1000);

function executaDeley(str, callback) {
    setTimeout(()=>{callback(str)}, 5000) 
}
executaDeley('Olá com delay de 5s', (str)=>{console.log(str); return 3})
