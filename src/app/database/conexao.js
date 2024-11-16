import pkg from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Desestruturação do `Client` a partir da importação padrão
const { Client } = pkg;

// Cria a conexão com o banco de dados PostgreSQL do Supabase
const client = new Client({
    host: process.env.DB_HOST,      // Exemplo: db.supabase.co
    port: process.env.DB_PORT || 5432, // Porta padrão para PostgreSQL
    user: process.env.DB_USER,      // Usuário do banco de dados
    password: process.env.DB_PASSWORD, // Senha do banco de dados
    database: process.env.DB_NAME,  // Nome do banco de dados
});

client.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados Supabase:', error.message);
        return;
    }
    console.log('Conectado ao banco de dados PostgreSQL na Supabase.');
});

/**
 * Executa um código SQL com ou sem valores
 * @param {string} sql instrução SQL a ser executada
 * @param {array} values valores a serem passados para o SQL
 * @param {string} mesageReject mensagem a ser exibida em caso de erro
 * @returns {Promise} Retorna uma Promise com o resultado da consulta
 */
export const consult = (sql, values = [], mesageReject = 'Erro na consulta') => {
    return new Promise((resolve, reject) => {
        client.query(sql, values, (err, result) => {
            if (err) {
                return reject(new Error(`${mesageReject}: ${err.message}`));
            }
            return resolve(result.rows);  // O resultado no PostgreSQL está em `result.rows`
        });
    });
};

export default client;
