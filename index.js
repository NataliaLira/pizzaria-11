const express = require('express')
const app = express()

const cardapioRouter = require('./routes/cardapioRouter')
const clientesRouter = require('./routes/clientesRouter')

//Desafio II:
// Trabalhando com parâmetros:
// crie a rota "/pizza" que receba um parâmetro chamado numero e retorne a pizza correspondente.
// Para completar o tópico acima, desenvolva o método chamado buscarPizza() no módulo cardápio. PS: esse método precisa receber um parâmetro para funcionar.

app.get('/', (req,res)=>{
    res.send("Deu tudo certo irmão, pode dormir tranquilo")
})

app.use('/pizza', cardapioRouter)
app.use('/clientes', clientesRouter)

// app.get('/pizza/cardapio', (req,res)=>{
//     res.send(cardapio)
// })

// app.get('/clientes', (req,res)=>{
//     res.send(clientes)
// })

//servidor
app.listen(3030, ()=> console.log("Servidor funcionando!"))