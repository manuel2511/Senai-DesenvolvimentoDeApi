const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res) => {
  const rotaPadrao = {
    nome_Rota: "/",
    codigo_status: "200",
    metodo: "GET",
  };
  res.status(200);
  res.json(rotaPadrao);
});
app.post("/cliente/novo", (req, res) => {
  const response = {
    mesagem: "Cliente criado com sucesso",
    status: 201,
  };
  res.status(201);
  res.json(response);
}); 
app.put("/cliente/update/cpfcnpj/12345678901", (req, res) => {
  const response = {
    mesagem: "Dados atualizados com sucesso",
    status: 200,
  };
  res.status(200);
  res.json(response);
}); 

app.listen(port, () => {
  console.log("Servidor em execução na porta ", port);
});
