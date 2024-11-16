import { consult } from "../database/conexao.js";

class VagaRepository {

    // Método para criar uma nova vaga
    create(vaga) {
        const sql = 'INSERT INTO vagas (titulo, descricao, link, salario, local) VALUES ($1, $2, $3, $4, $5)';
        const values = [vaga.titulo, vaga.descricao, vaga.link, vaga.salario, vaga.local];
        return consult(sql, values, 'Não foi possível cadastrar vaga');
    }

    // Método para buscar todas as vagas
    findAll() {
        const sql = 'SELECT * FROM vagas';
        return consult(sql, [], 'Não foi possível encontrar vagas');
    }

    // Método para deletar uma vaga
    delete(id) {
        const sql = 'DELETE FROM vagas WHERE idvagas = $1';
        const values = [id];
        return consult(sql, values, 'Não foi possível deletar vaga');
    }

    // Método para atualizar uma vaga
    update(vaga, idvagas) {
        const sql = 'UPDATE vagas SET titulo = $1, descricao = $2, link = $3, salario = $4, local = $5 WHERE idvagas = $6';
        const values = [vaga.titulo, vaga.descricao, vaga.link, vaga.salario, vaga.local, idvagas];
        return consult(sql, values, 'Não foi possível atualizar vaga');
    }
}

export default new VagaRepository();
