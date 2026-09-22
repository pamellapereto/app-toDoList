import database from "../config/database.js";

class FluxoModel {

    static async cadastrar(nome) {
        const [resultado] = await database.execute(
            `INSERT INTO fluxo (nome) VALUES (?)`,
            [nome]
        );
        return resultado.insertId;
    }
}

export default FluxoModel;