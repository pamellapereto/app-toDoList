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
            `SELECT tarefa.titulo, tarefa.dataAtualizada, fluxo.nome, categoria.etiqueta
            from tarefa INNER JOIN fluxo 
            ON tarefa.fkFluxo = fluxo.id INNER JOIN tarefa_categoria ON tarefa_categoria.fkTarefa = tarefa.id
            INNER JOIN categoria ON tarefa_categoria.fkCategoria = categoria.id
            WHERE tarefa.id = ? AND tarefa.fkUsuario = ?`,
            [tarefaId, usuarioId]
        );
        if(!tarefas[0]) {
            return null;
        }
        const tarefa = tarefas[0];
        return tarefa;
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