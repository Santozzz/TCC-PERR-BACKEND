import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes.js';
import connectPgSimple from 'connect-pg-simple';

const app = express();

// Middlewares
app.use(cors({ credentials: true }));

app.use(bodyParser.json());
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
        secure: false, // Use 'true' apenas em produção com HTTPS
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 dia
    }
}));

// Rotas
app.use(routes);

export default app;
