import app from './app.js'

const PORT = process.env.PORT || 3000

// Escutar a porta
app.listen(PORT, () => {
    console.log(`O servidor esta rodando no endereço: https://aws-0-sa-east-1.pooler.supabase.com`);
})      