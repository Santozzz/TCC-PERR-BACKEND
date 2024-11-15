import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Da28360989',
    database: 'db_perr'
})

conexao.connect()

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id / [usuario, email, id, vaga, idvagas]} values valores a serem passados  para o sql
 * @param {string} mesageReject mensagem a ser exibida
 * @returns objeto da promise
 */
export const consult = (sql, values = '', mesageReject = 'Erro na consulta') => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (err, result) => {
            if (err) {
                return reject(new Error(`${mesageReject}: ${err.message}`));
            }
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        });
    });
};

export default conexao
