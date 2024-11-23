import EmpresaRepository from "../repositories/EmpresaRepository.js";

class EmpresaController {

  async login(req, res) {
    const { email, senha } = req.body;
  
    try {
      const empre = await EmpresaRepository.findEmpresaByUsernameAndPassword(email, senha);
      if (empre.length > 0) {  // Se encontrou o usuário
        req.session.empreId = empre[0].id;  // Armazena o ID do usuário na sessão
        res.json({ message: 'Login bem-sucedido' });
      } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro no login', error: error.message });
    }
  }
        logout(req, res) {
        req.session.destroy(err => {
          if (err) {
            return res.status(500).json({ message: 'Erro ao fazer logout' });
          }
          res.json({ message: 'Logout bem-sucedido' });
        });
      }
      
      async checkSession(req, res) {
        try {
          if (req.session && req.session.empreId) {
            res.json({ loggedIn: true, empreId: req.session.empreId });
          } else {
            res.json({ loggedIn: false });
          }
        } catch (error) {
          console.error('Erro ao verificar a sessão:', error);
          res.status(500).json({ loggedIn: false, error: 'Erro ao verificar a sessão' });
        }
      }
      

    async index(req, res) {
        const row = await EmpresaRepository.findAll() 
        res.json(row)
    }
    async showByEmail(req, res) {
        const email = req.params.email
        const row = await EmpresaRepository.findByEmail(email)
        res.json(row)
    }
    async showById(req, res) {
      const idempresas = req.params.id
      const row = await EmpresaRepository.findById(idempresas)
      res.json(row)
  }
  async showByCnpj(req, res) {
    const cnpj = req.params.cnpj
    const row = await EmpresaRepository.findByCnpj(cnpj)
    res.json(row)
}
  async showByNome(req, res) {
    const nome = req.params.nome
    const row = await EmpresaRepository.findByNome(nome)
    res.json(row)
}
    async store(req, res) {
        const empresa = req.body
        const row = await EmpresaRepository.create(empresa)
        res.json(row)
    }
    async update(req, res) {
        const idvagas = req.params.idvagas
        const empresa = req.body
        const row = await EmpresaRepository.update(empresa, idvagas)
        res.json(row)
    }
    async delete(req, res) {
        const idempresas = req.params.id
        const row = await EmpresaRepository.delete(idempresas)
        res.json(row)
    }

}

// Padrão Sigletown
export default new EmpresaController()