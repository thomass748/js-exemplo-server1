import express from "express";
const app = express();

app.get("/", (req, res) =>  {
   res.send("Servidor rodando!");
})

app.get("/status", (req, res) => {
    res.json ({status: "online", sprint: 1});
})

app.get("/sobre", (req, res) => {
    res.send("Mensageiro Local - Criando no SENAI");
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`);
});
