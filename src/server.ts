import express from 'express'

const app = express()

app.get("/", (req, res) => {
    return res.send("Olá Mundo!")
})

app.post("/", (req, res) => {
    return res.json({ message: "Usuario salvo com sucesso!" })
})

app.listen(3333, () => console.log('Server Rodando na porta 3333'))
