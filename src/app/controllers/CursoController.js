import CursoRepository from '../repositories/CursoRepository.js'

class CursoController{

    async store(req, res){
        const curso = req.body
        const row = await CursoRepository.create(curso)
        res.json(row)
    }

    async index(req, res){
        const row = await CursoRepository.findAll()
        res.json(row)
    }

    async delete(req, res) {
        const idcursos = req.params.id
        const row = await CursoRepository.delete(idcursos)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.idcursos
        const curso = req.body
        const row = await CursoRepository.update(curso, id)
        res.json(row)
    }

}

export default new CursoController()