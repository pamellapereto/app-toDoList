import UsuarioModel from "../model/usuarioModel.js";
import bcrypt from "bcrypt";
class UsuarioService {
    static async atualizar(id, dados) {
        const {
            nome,
            email,
            senha
        } = dados;
        if (!nome || !email || !senha) {
            throw new Error("Nome, e-mail e senha são obrigatórios!");
        }
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const linhaAfetada = await UsuarioModel.atualizar(
            id,
            nome,
            email,
            senhaCriptografada
        ); 
        if (linhaAfetada === 0) {
            throw new Error("Usuário não encontrado!");
        }
        return {
            id,
            nome,
            email
        }
    }

    static async remover(id) {
        const linhaExcluída = await UsuarioModel.remover(
            id
        );
        if (linhaExcluída === 0) {
            throw new Error("Conta de usuário não encontrada!");
        }
        return {
            id
        }
    }
}   export default UsuarioService;