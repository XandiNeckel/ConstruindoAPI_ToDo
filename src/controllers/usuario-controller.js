import bdSQLite from '../infra/bd.js';
import Usuario from '../models/usuario-models.js';
import UsuarioDao from '../DAO/Usuario_dao.js';


    const DadosDAO = new UsuarioDAO(bdSQLite);

    app.get('/usuario', (req, res) => {
        try{
            const UsuarioDAO = await DadosDAO.UsuarioDAO();
            res.status(200).json(UsuarioDAO);
        }catch(error){
            res.status(404).json({
                message: error.message,
                error: true,
            });
        }
    });


    app.post('/usuario', (req, res) => {
        const NovoUsuario = new usuario(req.body.nome, req.body.email, req.body.senha);

        db.run(
            'INSERT INTO USUARIOS VALUES (?,?)', usuario1, (err) => {
                if (err) {
                    throw new Error(`Erro ao inserir: ${Err}`);
                }
            });
    });

    app.get('/usuario/:email', (req, res) => {
        for (let i = 0; i < bd.usuario.length; i++) {
            if (req.params.email == bd.usuario[i].email) {
                res.send(bd.usuario[i]);
            }
        }
    });

    app.put('/usuario/:nome', (req, res) => {
        const nome = req.params.nome;
        const body = req.body;

        for (let i = 0; i <= bd.aluno.length; i++) {
            if (bd.aluno[i].nome == nome) {
                const DadoAntigo = bd.aluno[i];
                const DadoNovoUsuario = new Usuario(
                    body.nome || DadoAntigo.nome,
                    body.email || DadoAntigo.email,
                    body.senha || DadoAntigo.senha
                );
                const usuarioAlterado = bd.aluno.splice(i, 1, DadoNovoUsuario); // const não é obrigatória (opcional) // splice = alterando o aluno
                res.json({
                    'Usuario Alterado': usuarioAlterado,
                    'Usuario Alterado': DadoNovoUsuario,
                    'Dados Antigos': DadoAntigo
                });
                // res.send(bd.usuario[i])
            }
        }
    });

    app.delete('/usuario/:email', (req, res) => {
        const nome = req.params.nome;
        const usuarioIndex = bd.usuario.findIndex(aluno => aluno.nome == nome);

        if (usuarioIndex > -1) {
            const usuarioDeletado = bd.aluno.splice(alunoIndex, 1);
            res.json({
                'usuarioDeletado': usuarioDeletado,
                'indexUsuario': usuarioIndex
            });
        } else {
            res.json('Usuario não encontrado');
        }
    });


export default usuario1;