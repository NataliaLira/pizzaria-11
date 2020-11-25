const express = require('express')
const router = express.Router()

const cardapio = require('../cardapio')

router.get('/cardapio', (req,res)=>{
    res.send(cardapio)
})

module.exports = router
