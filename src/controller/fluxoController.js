import FluxoService from "../service/fluxoService.js";

class FluxoController {

    static async cadastrar(req, res) {
        const fluxo = await FluxoService.cadastrar(req.body);
        
        return res
            .status(201)
            .json(fluxo);
    }
}
export default FluxoController;