import TarefaModel from "../model/tarefaModel.js";
class TarefaService {

    static opcoesFluxos = [
        1,
        2,
        3
    ];

    static validarOpcao(fluxo) {
        if(!this.opcoesFluxos.includes(fluxo)) {
            throw new Error(`Fluxo inválido. Escolhe uma das opções: 
                1- PENDENTE
                2- EM ANDAMENTO
                3- CONCLUÍDO`);
        }
    }

    static async cadastrar(dados, usuarioId) {
        const {
            titulo,
            fluxo = 1,
            //categorias = []
        } = dados;

        if (!titulo) {
            throw new Error("O título da tarefa é obrigatório!");
        }

        this.validarOpcao(fluxo);

        //Bloco de códigos para definir categorias da tarefa cadastrada

        const tarefaId = await TarefaModel.cadastrar(
            titulo,
            fluxo,
            usuarioId
        );
        return await TarefaModel.buscarPorIdUsuario(
            tarefaId,
            usuarioId
        );
    }

    static async remover(id) {
        const linhaExcluida = await TarefaModel.remover(id);
        if (linhaExcluida === 0) {
            throw new Error("Esta tarefa não existe!");
        }
        return {
            id
        }
    }
}
export default TarefaService;