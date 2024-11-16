import { consult } from "../database/conexao.js"

class UsuarioRepository {

    findUserByUsernameAndPassword(email, senha) {
        const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
        return consult(sql, [email, senha], 'Erro ao buscar usuário');
      }

    // CRUD
    create(usuario) {
        // Corrigido para usar 'nome' ao invés de 'name'
        const sql = 'INSERT INTO usuarios ?';
        return consult(sql, { nome: usuario.nome, email: usuario.email, telefone: usuario.telefone, senha: usuario.senha }, 'Não foi possível cadastrar');
    }

    findAll() {
        const  sql = 'SELECT * FROM usuarios'
        return consult(sql, 'Não foi possivel achar')
    }

    findByEmail(email) {
        const  sql = 'SELECT * FROM usuarios WHERE email=?'
        return consult(sql, email, 'Não foi possivel achar o ID')
    }
    update(usuario, id) {
        const  sql = 'UPDATE usuarios SET ? WHERE id=?'
        return consult(sql, [usuario, id], 'Não foi possivel atualizar')
    }
    delete(id) {
        const  sql = 'DELETE FROM usuarios WHERE id=?'
        return consult(sql, id, 'Não foi possivel deletar')
    }

}

export default new UsuarioRepository()