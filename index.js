const router = require ('./src/routers/recuperacao')
const express = require ('express')
const app = express()
app.use(express.json())
app.use(router)
app.listen(3000, () =>{
    console.info("Servidor rodando na porta 3000")
})