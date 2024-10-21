import express from 'express';
import routes from './routes.js';
import cors from 'cors'
const app = express();

// Para ler body como JSON   
app.use(express.json())

// Para comunicação entre o Front e Back
app.use(cors())

// Usar o router
app.use(routes) 


export default app;
