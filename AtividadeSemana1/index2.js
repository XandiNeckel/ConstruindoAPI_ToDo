const alexandre = true;

const Alexandre = new Promise((resolve, reject) => {
        if (alexandre == true) {
            resolve('cumpriu a promesa')
        } else {
            reject('descumpriu a promessa')
        }
    }).then((resolve)=>{
    console.log(resolve)

}).catch((reject)=>{
    console.log(reject)
})