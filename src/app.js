import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes.js';

const app = express();

// Middleware CORS
app.use(cors({
  origin: '*', // Domínio do frontend hospedado
  credentials: true, // Permitir envio de cookies/sessões
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://tcc-perr-frontend.vercel.app'); // Permitir o frontend
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true'); // Permitir cookies/sessões
  next();
});


// Middleware Body Parser
app.use(bodyParser.json());

// Middleware de Sessão
app.use(session({
  secret: 'seu_segredo_aqui', // Substitua por uma string segura
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }, // Altere para 'true' em produção (HTTPS)
}));

// Rotas
app.use(routes);

export default app;
