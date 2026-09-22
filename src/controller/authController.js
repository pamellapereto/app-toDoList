import AuthService from "../service/authService.js";

class AuthController {
    static async cadastrar(req, res) {
        const requisicao = await AuthService.cadastrar(req.body);

        return res
            .status(201)
            .json(requisicao);
    }
    static async login(req, res) {
        const requisicao = await AuthService.login(req.body);

        return res
            .status(200)
            .json(requisicao)
    }
}
export default AuthController;
