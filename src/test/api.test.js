const superTest = require ('superTest')
const UrlAPI = 'http://localhost:3000'

describe('UrlAPI', ()=>{
    test('TESTAR ROTA USUARIO',()=>{
        return superTest(UrlAPI).get('/Usuario')
        .then((resposta)=>{
            expect(resposta.statusCode).toBe(200)
        })
    })
})