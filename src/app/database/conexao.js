import pkg from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Desestruturação do `Client` a partir da importação padrão
const { Client } = pkg;

// Cria a conexão com o banco de dados PostgreSQL do Supabase
const client = new Client({
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    user: 'postgres.inhjqkfiufeoxiqqxypm',
    password: 'TccPerr2024@',
    database: 'postgres',
    port: 6543
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
    // Garantir que 'values' seja um array
    if (!Array.isArray(values)) {
        values = [];
    }

    return new Promise((resolve, reject) => {
        client.query(sql, values, (err, result) => {
            if (err) {
                return reject(new Error(`${mesageReject}: ${err.message}`));
            }
            return resolve(result.rows); // Retorna os resultados
        });
    });
};


export default client;
