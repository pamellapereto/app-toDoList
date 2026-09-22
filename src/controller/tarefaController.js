import TarefaService from "../service/tarefaService.js";


class TarefaController {
    static async cadastrar(req, res) {
        const tarefa = await TarefaService.cadastrar(req.body);

        return res
            .status(201)
            .json(tarefa);
    }

}

export default TarefaController;