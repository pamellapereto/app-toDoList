import database from "../config/database.js";

class UsuarioModel {
    static async cadastrar(nome, email, senha) {
        const [resultado] = await database.execute(
            `INSERT INTO usuario (nome, email, senha)
            VALUES (?, ?, ?)`,
            [nome, email, senha]
        );
        return resultado.insertId;
    }
    static async login(email) {
        const [resultado] = await database.execute(
            `SELECT id, nome, email, senha FROM usuario WHERE
            email = ?`,
            [email]
        );
        return resultado[0];
    }
    static async atualizar(id, nome, email, senha) {
        const [resultado] = await database.execute(
            `UPDATE usuario SET nome = ?, email = ?, senha = ?
            WHERE id = ?`,
            [nome, email, senha, id]
        );
        return resultado.affectedRows;
    }

    static async remover(id) {
        const [resultado] = await database.execute(
            `DELETE FROM usuario WHERE id = ?`,
            [id]
        );
        return resultado.affectedRows;
    }
}
export default UsuarioModel;