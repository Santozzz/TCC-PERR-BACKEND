import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
})

conexao.connect(error => {
    if (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
      return;
    }
    console.log('Conectado ao banco de dados MySQL.');
})

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
