import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes.js';
import connectPgSimple from 'connect-pg-simple';

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173/',  // Defina o domínio do frontend aqui
  credentials: true                      // Permite enviar cookies com as requisições
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'seu_segredo_aqui',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Altere para 'true' se usar HTTPS
}));

const PgStore = connectPgSimple(session);

app.use(session({
    store: new PgStore({
        conObject: { // Configuração da conexão ao banco de dados
          host: 'aws-0-sa-east-1.pooler.supabase.com',
          user: 'postgres.inhjqkfiufeoxiqqxypm',
          password: 'TccPerr2024@',
          database: 'postgres',
          port: 6543,
        }
    }),
    secret: 'chave-secreta', // Substitua por uma chave segura
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 dia
    }
}));

// Rotas
app.use(routes);

export default app;
