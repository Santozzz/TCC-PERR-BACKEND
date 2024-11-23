import UsuarioRepository from "../repositories/UsuarioRepository.js"

class UsuarioController {

  async login(req, res) {
    const { email, senha } = req.body;
  
    // Autenticar usuário (substitua com sua lógica)
    const usuario = await UsuarioRepository.findUserByEmailAndPassword(email, senha);
    if (usuario) {
      req.session.userId = usuario.id; // Salva o ID do usuário na sessão
      res.json({ message: 'Login realizado com sucesso', userId: usuario.id });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
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
          if (req.session && req.session.userId) {
            res.json({ loggedIn: true, userId: req.session.userId });
          } else {
            res.json({ loggedIn: false });
          }
        } catch (error) {
          console.error('Erro ao verificar a sessão:', error);
          res.status(500).json({ loggedIn: false, error: 'Erro ao verificar a sessão' });
        }
      }
      
    

      async updateStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
    
        try {
            const result = await UsuarioRepository.updateStatus(id, status);
            res.json({ message: 'Status atualizado com sucesso', result });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar status', error: error.message });
        }
    }
    

    async index(req, res) {
        const row = await UsuarioRepository.findAll() 
        res.json(row)
    }
    async showByEmail(req, res) {
        const email = req.params.email
        const row = await UsuarioRepository.findByEmail(email)
        res.json(row)
    }
    async showById(req, res) {
      const id = req.params.id
      const row = await UsuarioRepository.findById(id)
      res.json(row)
  }
  async showByNome(req, res) {
    const nome = req.params.nome
    const row = await UsuarioRepository.findByNome(nome)
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