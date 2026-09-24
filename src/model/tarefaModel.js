import database from "../config/database.js"
class TarefaModel {

    static async cadastrar(titulo, fluxo, usuarioId) {
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
    static async remover(id) {
        const [resultado] = await database.execute(
            `DELETE FROM tarefa WHERE id = ?`,
            [id]
        );
        return resultado.affectedRows
    }
}
export default TarefaModel;