import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes.js';

const app = express();

// Middleware CORS
app.use(cors({
  origin: 'https://tcc-perr-frontend.vercel.app', // Domínio do frontend hospedado
  credentials: true, // Permitir envio de cookies/sessões
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
}));

// Middleware Body Parser
app.use(bodyParser.json());

// Middleware de Sessão
app.use(session({
  secret: 'seu_segredo_aqui', // Substitua por uma string segura
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Altere para 'true' em produção (HTTPS)
}));

// Rotas
app.use(routes);

export default app;
