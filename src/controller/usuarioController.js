import UsuarioService from "../service/usuarioService.js";
class UsuarioController {
    static async atualizar(req, res) {
        try {
            const id = req.params.id;
            const requisicao = await UsuarioService.atualizar(
                id,
                req.body
            );
            return res
                .status(200)
                .json(requisicao)
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
            const requisicao = await UsuarioService.remover(
                id
            );
            return res
                .status(200)
                .json({ mensagem: `A conta do usuário com ID ${requisicao.id} foi excluída com sucesso!` });
        }
        catch (erro) {
            return res
                .status(400)
                .json({ mensagem: erro.message });
        }
    }
}
export default UsuarioController;