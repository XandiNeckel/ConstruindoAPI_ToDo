import fetch from 'node-fetch'

function geraUsuarios(nUsers){
fetch (`https://randomuser.me/api/?results=${nUsers}`)
.then(response =>{
    if(reponse.ok) return response.json()
})
.then(data => {
    console.log(data)
})
}
geraUsuarios(2)