const express = require('express')
const app = express()

const cardapioRouter = require('./routes/cardapioRouter')
const clientesRouter = require('./routes/clientesRouter')

app.get('/', (req,res)=>{
    res.send("Deu tudo certo irmão, pode dormir tranquilo")
})

app.use('/pizza', cardapioRouter)
app.use('/clientes', clientesRouter)

app.listen(3030, ()=> console.log("Servidor funcionando!"))