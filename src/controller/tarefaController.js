import TarefaService from "../service/tarefaService.js";
class TarefaController {
    static async cadastrar(req, res) {
        const tarefa = await TarefaService.cadastrar(req.body, req.usuarioId);
        return res
            .status(201)
            .json(tarefa);
    }

    static async atualizar(req, res) {
        try {
            const id = req.params.id;
            const requisicao = await TarefaService.atualizar(
                id,
                req.body,
                req.usuarioId
            );
            return res
                .status(200)
                .json(requisicao);
        }
        catch(erro) {
            return res
                .status(400)
                .json({mensagem: erro.message});
        }
    }

    static async remover(req, res) {
        try {
            const id = req.params.id;
            const requisicao = await TarefaService.remover(id, req.usuarioId);
            return res
                .status(200)
                .json({ mensagem: `A tarefa com ID ${requisicao.id} foi excluída com sucesso!` });
        }
        catch (erro) {
            return res
                .status(400)
                .json({ mensagem: erro.message });
        }
    }
}

export default TarefaController;