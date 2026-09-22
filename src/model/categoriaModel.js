import database from "../config/database.js";
class CategoriaModel {
    static async cadastrar(etiqueta) {
        const [resultado] = await database.execute(
            `INSERT INTO categoria (etiqueta) VALUES (?)`,
            [etiqueta]
        );
        return resultado.insertId;
    }
    static async atualizar(id, etiqueta) {
        const [resultado] = await database.execute(
            `UPDATE categoria SET etiqueta = ? WHERE id = ?`,
            [etiqueta, id]
        );
        return resultado.affectedRows;
    }
    static async remover(id) {
        const [resultado] = await database.execute(
            `DELETE FROM categoria WHERE id = ?`,
            [id]
        );
        return resultado.affectedRows;
    }
}
export default CategoriaModel;