import { consult } from "../database/conexao.js";

class CursoRepository {

    // Cria um novo curso
    create(curso) {
        const sql = 'INSERT INTO cursos (titulo, descricao, link) VALUES ($1, $2, $3)';
        const values = [curso.titulo, curso.descricao, curso.link];
        return consult(sql, values, 'Não foi possível cadastrar o curso');
    }

    // Busca todos os cursos
    findAll() {
        const sql = 'SELECT * FROM cursos';
        return consult(sql, [], 'Não foi possível encontrar os cursos');
    }

    // Deleta um curso pelo ID
    delete(id) {
        const sql = 'DELETE FROM cursos WHERE idcursos = $1';
        const values = [id];
        return consult(sql, values, 'Não foi possível deletar o curso');
    }

    // Atualiza os dados de um curso
    update(curso, idcursos) {
        const sql = 'UPDATE cursos SET titulo = $1, descricao = $2, link = $3 WHERE idcursos = $4';
        const values = [curso.titulo, curso.descricao, curso.link, idcursos];
        return consult(sql, values, 'Não foi possível atualizar o curso');
    }
}

export default new CursoRepository();
