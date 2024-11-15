// Importando o pacote pg de forma compatível com ES6
import pkg from 'pg';
const { Client } = pkg;

// Configurando a conexão com o banco de dados PostgreSQL
const client = new Client({
  host: process.env.DB_HOST,      // Exemplo: db.supabase.co
  port: process.env.DB_PORT || 5432, // Porta padrão para PostgreSQL
  user: process.env.DB_USER,      // Usuário do banco de dados
  password: process.env.DB_PASSWORD, // Senha do banco de dados
  database: process.env.DB_NAME,  // Nome do banco de dados
});

// Conectando ao banco de dados
client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados PostgreSQL na Supabase');
  }
});

// Função para executar consultas SQL
export const consult = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    client.query(sql, values, (err, result) => {
      if (err) {
        return reject(new Error(`Erro na consulta: ${err.message}`));
      }
      return resolve(result.rows);
    });
  });
};

export default client;