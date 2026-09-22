import database from "./src/config/database.js";

async function testDatabaseConnection() {
  try {
    const connection = await database.getConnection();
    console.log("Banco de dados conectado com sucesso!");
    // Mostrar as tabelas do banco
    const [tables] = await connection.query("SHOW TABLES");
    console.log("Tabelas no banco de dados:");
    console.table(tables);
    connection.release();
  } catch (erro) {
    console.error("Erro ao conectar ao banco de dados:", erro);
  } finally {
    database.end();
  }
}
testDatabaseConnection();
