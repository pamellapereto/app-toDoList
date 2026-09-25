import bcrypt from 'bcrypt';
import UsuarioModel from '../model/usuarioModel.js';
import jwt from "jsonwebtoken";

class AuthService {
    static async cadastrar(dados) {
        const {
            nome,
            email,
            senha
        } = dados;
        if (!nome || !email || !senha) {
            throw new Error("Nome, email e senha são obrigatórios!");
        }
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const usuarioId = await UsuarioModel.cadastrar(
            nome,
            email,
            senhaCriptografada
        );
        const usuario = {
            usuarioId: usuarioId,
            nome,
            email
        }
        return usuario;
    }


    static async login(dados) {
        const {
            email,
            senha
        } = dados;

        if (!email || !senha) {
            throw new Error("E-mail e senha são obrigatórios");
        }
        const usuarioId = await UsuarioModel.login(email);
        if (!usuarioId) {
            throw new Error("E-mail inválido!");
        }
        const senhaCorreta = await bcrypt.compare(senha, usuarioId.senha);
        if (!senhaCorreta) {
            throw new Error("Senha incorreta!");
        }
        const token = jwt.sign(
            {
                email: usuarioId.email
            },
            process.env.JWT_SECRET,
            {
                subject: String(usuarioId.id),
                expiresIn: "2h"
            }
        );
        return {
            usuarioId: {
                id: usuarioId.id,
                nome: usuarioId.nome,
                email: usuarioId.email
            },
            token
        }
    }
}
export default AuthService;