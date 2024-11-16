import { consult } from "../database/conexao.js";

class VagaRepository{

    create(vaga) {
        const sql = 'INSERT INTO vagas ?'
        return consult(sql, { titulo: vaga.titulo, descricao: vaga.descricao, link: vaga.link, salario: vaga.salario, local: vaga.local }, 'Não foi possível cadastrar vaga')
    }

    findAll(){
        const sql = 'SELECT * FROM vagas'
        return consult(sql, 'Não foi possível achar')
    }

    delete(id) {
        const  sql = 'DELETE FROM vagas WHERE idvagas=?'
        return consult(sql, id, 'Não foi possivel deletar')
    }

    update(vaga, idvagas) {
        const  sql = 'UPDATE vagas SET ? WHERE idvagas=?'
        return consult(sql, [vaga, idvagas], 'Não foi possivel atualizar')
    }

}

export default new VagaRepository()