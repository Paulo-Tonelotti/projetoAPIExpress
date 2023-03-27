const porta = 3003

const express = require('express')
const app = express()


app.get('/produtos', (req, res) => {
    res.send({ nome: 'Notebook', preco: 123.45 })
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})