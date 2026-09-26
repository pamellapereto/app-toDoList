import database from "../config/database.js"
class TarefaModel {

    static async cadastrar(database, titulo, fluxo, usuarioId) {
        const [resultado] = await database.execute(
            `INSERT INTO tarefa (titulo, fkUsuario, fkFluxo) VALUES (?, ?, ?)`,
            [titulo, usuarioId, fluxo]
        );
        return resultado.insertId;
    }
    static async buscarPorIdUsuario(tarefaId, usuarioId) {
        const [tarefas] = await database.execute(
            `SELECT tarefa.titulo, tarefa.dataAtualizada, fluxo.nome from tarefa INNER JOIN fluxo 
            ON tarefa.fkFluxo = fluxo.id WHERE tarefa.id = ? AND tarefa.fkUsuario = ?`,
            [tarefaId, usuarioId]
        );
        if(!tarefas[0]) {
            return null;
        }
        const tarefa = tarefas[0];
        return tarefa;
    }

    static async listarCategorias(tarefaId) {
        const [resultado] = await database.execute(
            `SELECT categoria.id, categoria.etiqueta FROM categoria
            INNER JOIN tarefa_categoria ON tarefa_categoria.fkCategoria = categoria.id
            WHERE tarefa_categoria.fkTarefa = ? ORDER BY etiqueta`,
            [tarefaId]
        );
        return resultado;
    }
    
    static async atualizarFluxo(tarefaId, usuarioId, fluxo) {
        const [resultado] = await database.execute(
            `UPDATE tarefa SET fkFluxo = ? WHERE id = ? AND fkUsuario = ?`,
            [fluxo, tarefaId, usuarioId]
        );
        return resultado.affectedRows;
    }


    static async remover(id, usuarioId) {
        const [resultado] = await database.execute(
            `DELETE FROM tarefa WHERE id = ? and fkUsuario = ?`,
            [id, usuarioId]
        );
        return resultado.affectedRows;
    }
}
export default TarefaModel;