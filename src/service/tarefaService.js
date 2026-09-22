import TarefaModel from "../model/tarefaModel.js";
class TarefaService {
    static async cadastrar(dados) {
        const {
            titulo,
            usuarioId,
            fluxoId
        } = dados;

        if (!titulo) {
            throw new Error("O título da tarefa é obrigatório!");
        }
        const tarefaId = await TarefaModel.cadastrar(
            titulo,
            usuarioId,
            fluxoId
        );
        return await TarefaModel.buscarPorIdUsuario(
            tarefaId,
            usuarioId
        );
    }
}
export default TarefaService;