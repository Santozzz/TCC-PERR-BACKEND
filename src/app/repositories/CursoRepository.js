import { consult } from "../database/conexao.js";

class CursoRepository{

    create(curso) {
        const sql = 'INSERT INTO cursos SET ?'
        return consult(sql, { titulo: curso.titulo, descricao: curso.descricao, link: curso.link }, 'Não foi possível cadastrar curso')
    }

    findAll(){
        const sql = 'SELECT * FROM cursos'
        return consult(sql, 'Não foi possível achar')
    }

    delete(id) {
        const  sql = 'DELETE FROM cursos WHERE idcursos=?'
        return consult(sql, id, 'Não foi possivel deletar')
    }

    update(curso, idcursos) {
        const  sql = 'UPDATE cursos SET ? WHERE idcursos=?'
        return consult(sql, [curso, idcursos], 'Não foi possivel atualizar')
    }

}

export default new CursoRepository()