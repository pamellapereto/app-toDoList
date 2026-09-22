import FluxoModel from "../model/fluxoModel.js";

class FluxoService {

    static async cadastrar(dados) {
        const { nome } = dados;

        if (!nome) {
             throw new Error("Escolha entre as opções:\n 1. PENDENTE\n 2. EM ANDAMENTO\n 3. CONCLUÍDO"); 
        }

        const fluxoId = await FluxoModel.cadastrar(nome);
        
        const fluxo = {
            fluxoId: fluxoId,
            nome
        }
        
        return fluxo;
    }

}

export default FluxoService;