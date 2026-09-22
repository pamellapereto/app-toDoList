import database from "../config/database.js"

class TarefaModel {
    static async cadastrar(titulo, usuarioId, fluxoId) {
        const [resultado] = await database.execute(
            `INSERT INTO tarefa (titulo, fkUsuario, fkFluxo) VALUES (?, ?, ?)`,
            [titulo, usuarioId, fluxoId]
        );
        return resultado.insertId;
    }
    static async buscarPorIdUsuario(tarefaId, usuarioId) {
        const [tarefas] = await database.execute(
            `SELECT tarefa.titulo, tarefa.dataAtualizada, fluxo.nome from tarefa INNER JOIN fluxo 
            ON tarefa.fkFluxo = fluxo.id WHERE tarefa.id = ? AND tarefa.fkUsuario = ?`,
            [tarefaId, usuarioId]
        );
        //Se não houver esta tarefa associada a este usuário
        if(!tarefas[0]) {
            return null;
        }
        const tarefa = tarefas[0];
        return tarefa;
    }
}
export default TarefaModel;