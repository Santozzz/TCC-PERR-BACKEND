import app from './app.js'

const PORT = process.env.PORT || 3000

// Escutar a porta
app.listen(PORT, () => {
    console.log(`O servidor esta rodando no endereço: http://localhost:${PORT}`);
})      