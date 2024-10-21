import VagaRepository from '../repositories/VagaRepository.js'

class VagaController{

    async store(req, res){
        const vaga = req.body
        const row = await VagaRepository.create(vaga)
        res.json(row)
    }

    async index(req, res){
        const row = await VagaRepository.findAll()
        res.json(row)
    }

    async delete(req, res) {
        const idvagas = req.params.id
        const row = await VagaRepository.delete(idvagas)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.idvagas
        const vaga = req.body
        const row = await VagaRepository.update(vaga, id)
        res.json(row)
    }

}

export default new VagaController()