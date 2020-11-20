const express = require('express')
const app = express()

//rotas
app.get('/', (req,res)=>{
    res.send("Deu tudo certo irmão, pode dormir tranquilo")
})

//servidor
app.listen(3030, ()=> console.log("Servidor funcionando!"))