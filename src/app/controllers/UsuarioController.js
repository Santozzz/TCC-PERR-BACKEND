import UsuarioRepository from "../repositories/UsuarioRepository.js"

class UsuarioController {

    async index(req, res) {
        const row = await UsuarioRepository.findAll() 
        res.json(row)
    }
    async show(req, res) {
        const email = req.params.email
        const row = await UsuarioRepository.findByEmail(email)
        res.json(row)
    }
    async store(req, res) {
        const usuario = req.body
        const row = await UsuarioRepository.create(usuario)
        res.json(row)
    }
    async update(req, res) {
        const idvagas = req.params.idvagas
        const usuario = req.body
        const row = await UsuarioRepository.update(usuario, idvagas)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await UsuarioRepository.delete(id)
        res.json(row)
    }

}

// Padrão Sigletown
export default new UsuarioController()