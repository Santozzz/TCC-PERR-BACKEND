import { consult } from "../database/conexao.js";

class EmpresaRepository {

    // Busca um usuário por email e senha
    findEmpresaByUsernameAndPassword(email, senha) {
        const sql = 'SELECT * FROM empresas WHERE email = $1 AND senha = $2';
        return consult(sql, [email, senha], 'Erro ao buscar empresa');
    }

    // Cria um novo usuário
    create(empresa) {
        const sql = 'INSERT INTO empresas (nome, email, telefone, senha, cnpj) VALUES ($1, $2, $3, $4, $5)';
        const values = [empresa.nome, empresa.email, empresa.telefone, empresa.senha];
        return consult(sql, values, 'Não foi possível cadastrar');
    }

    // Busca todos os usuários
    findAll() {
        const sql = 'SELECT * FROM empresas';
        return consult(sql, [], 'Não foi possível encontrar empresas');
    }

    // Busca um usuário pelo email
    findByEmail(email) {
        const sql = 'SELECT * FROM empresas WHERE email = $1';
        const values = [email];
        return consult(sql, values, 'Não foi possível encontrar a empresa pelo email');
    }

    findById(idempresas) {
        const sql = 'SELECT * FROM empresas WHERE id = $1';
        const values = [idempresas];
        return consult(sql, values, 'Não foi possível encontrar a empresa pelo id');
    }

    findByNome(nome) {
        const sql = 'SELECT * FROM empresas WHERE nome = $1';
        const values = [nome];
        return consult(sql, values, 'Não foi possível encontrar a empresa pelo nome');
    }


    // Atualiza os dados de um usuário
    update(empresa, id) {
        const sql = 'UPDATE empresas SET nome = $1, email = $2, telefone = $3, senha = $4, cnpj =$5,  WHERE id = $6';
        const values = [empresa.nome, empresa.email, empresa.telefone, empresa.senha, empresa.cnpj, id];
        return consult(sql, values, 'Não foi possível atualizar a empresa');
    }

    // Deleta um usuário pelo ID
    delete(id) {
        const sql = 'DELETE FROM empresas WHERE id = $1';
        const values = [id];
        return consult(sql, values, 'Não foi possível deletar a empresa');
    }
}

export default new EmpresaRepository();