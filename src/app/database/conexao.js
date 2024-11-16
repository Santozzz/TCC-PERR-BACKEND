import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

conexao.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});
export const consult = (sql, values = '', mesageReject = 'Erro na consulta') => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (err, result) => {
            if (err) {
                return reject(new Error(`${mesageReject}: ${err.message}`)); // Corrigido
            }
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        });
    });
};
