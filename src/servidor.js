const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados =  require('./bancoDeDados')


app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos())
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
    next()
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto).status(201)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})