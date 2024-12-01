import { consult } from "../database/conexao.js";

class UsuarioRepository {

    // Busca um usuário por email e senha
    findUserByUsernameAndPassword(email, senha) {
        const sql = 'SELECT * FROM usuarios WHERE email = $1 AND senha = $2';
        return consult(sql, [email, senha], 'Erro ao buscar usuário');
    }

    // Cria um novo usuário
    create(usuario) {
        const sql = 'INSERT INTO usuarios (nome, email, telefone, senha) VALUES ($1, $2, $3, $4)';
        const values = [usuario.nome, usuario.email, usuario.telefone, usuario.senha];
        return consult(sql, values, 'Não foi possível cadastrar');
    }

    // Busca todos os usuários
    findAll() {
        const sql = 'SELECT * FROM usuarios';
        return consult(sql, [], 'Não foi possível encontrar usuários');
    }

    // Busca um usuário pelo email
    findByEmail(email) {
        const sql = 'SELECT * FROM usuarios WHERE email = $1';
        const values = [email];
        return consult(sql, values, 'Não foi possível encontrar o usuário pelo email');
    }

    findById(id) {
        const sql = 'SELECT * FROM usuarios WHERE id = $1';
        const values = [id];
        return consult(sql, values, 'Não foi possível encontrar o usuário pelo id');
    }

    findByNome(nome) {
        const sql = 'SELECT * FROM usuarios WHERE nome = $1';
        const values = [nome];
        return consult(sql, values, 'Não foi possível encontrar o usuário pelo nome');
    }


    // Atualiza os dados de um usuário
    update(usuario, id) {
        const sql = 'UPDATE usuarios SET nome = $1, email = $2, telefone = $3, senha = $4 WHERE id = $5';
        const values = [usuario.nome, usuario.email, usuario.telefone, usuario.senha, id];
        return consult(sql, values, 'Não foi possível atualizar o usuário');
    }

    // Deleta um usuário pelo ID
    delete(id) {
        const sql = 'DELETE FROM usuarios WHERE id = $1';
        const values = [id];
        return consult(sql, values, 'Não foi possível deletar o usuário');
    }

    // Atualiza o status de um usuário
    updateStatus(id, status) {
        const sql = 'UPDATE usuarios SET status = $1 WHERE id = $2';
        const values = [status, id];
        return consult(sql, values, 'Não foi possível atualizar o status do usuário');
    }

    getUsuariosValidados() {
        const sql = 'SELECT * FROM usuarios WHERE status = $1';
        const values = [true]; // Busca usuários com status true
        return consult(sql, values, 'Não foi possível buscar os usuários validados');
    }
    
    getUsuariosNaoValidados() {
        const sql = 'SELECT * FROM usuarios WHERE status = $1';
        const values = [false]; // Busca usuários com status true
        return consult(sql, values, 'Não foi possível buscar os usuários nao validados');
    }

}

export default new UsuarioRepository();