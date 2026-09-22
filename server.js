import database from "./src/config/database.js";
import express from "express";
import dotenv from "dotenv/config";
import authRoutes from "./src/routes/authRoutes.js";
import fluxoRoutes from "./src/routes/fluxoRoutes.js";
import tarefaRoutes from "./src/routes/tarefaRoutes.js"
import usuarioRoutes from "./src/routes/usuarioRoutes.js"
import categoriaRoutes from "./src/routes/categoriaRoutes.js";
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando!"
    })
});
app.use(
    "/autenticacao",      //Anteriormente a rota era: /usuario, trocou para /autenticacao
    authRoutes
);
app.use(
    "/usuario",
    usuarioRoutes
);

app.use(
    "/fluxo",
    fluxoRoutes,
);
//Rota para API Tarefa (envio de dados em json por framework express)
app.use(
    "/tarefa",
    tarefaRoutes,
);

//rota para categoria (framework express com envio de dados em json)
app.use(
    "/categoria",
    categoriaRoutes
)

async function iniciarServidor() {
    try {
        const connection = await database.getConnection();
        console.log("Banco de dados conectado com sucesso!");
        connection.release();
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
    catch (erro) {
        console.error("Erro ao conectar com o banco");
        console.error(erro);
        process.exit(1);
    }
}
iniciarServidor();








