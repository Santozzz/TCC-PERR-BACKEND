import { Router } from "express";
import UsuarioController from "./app/controllers/UsuarioController.js";
import VagaController from "./app/controllers/VagaController.js";
import CursoController from "./app/controllers/CursoController.js";

const router = Router()

// ROTAS USUARIOS
router.get('/usuarios', UsuarioController.index)
router.get('/usuarios/:email', UsuarioController.show)
router.post('/usuarios', UsuarioController.store)
router.put('/usuarios/:id', UsuarioController.update)
router.delete('/usuarios/:id', UsuarioController.delete)

// ROTAS VAGAS
router.post('/vagas', VagaController.store)
router.get('/vagas', VagaController.index)
router.put('/vagas/:idvagas', VagaController.update)
router.delete('/vagas/:id', VagaController.delete)

// ROTAS CURSOS
router.post('/cursos', CursoController.store)
router.get('/cursos', CursoController.index)
router.put('/cursos/:idcursos', CursoController.update)
router.delete('/cursos/:id', CursoController.delete)



export default router