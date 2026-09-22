import CategoriaService from "../service/categoriaService.js";
class CategoriaController {
    static async cadastrar(req, res) {
        const categoria = await CategoriaService.cadastrar(
            req.body
        );
        return res
            .status(201)
            .json(categoria);
    }
    static async atualizar(req, res) {
        try {
            const id = req.params.id;
            const requisicao = await CategoriaService.atualizar(
                id,
                req.body
            );
            return res
                .status(200)
                .json(requisicao);
        }
        catch (erro) {
            return res
                .status(400)
                .json({ mensagem: erro.message });
        }
    }


    static async remover(req, res) {
        try {
            const id = req.params.id;
            const requisicao = await CategoriaService.remover(
                id,
            );
            return res
                .status(200)
                .json({mensagem: `A categoria com ID ${requisicao.id} foi excluída com sucesso`});
        }
        catch (erro) {
            return res
                .status(400)
                .json({ mensagem: erro.message });
        }
    }
}
export default CategoriaController;