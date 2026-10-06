import AuthService from "../service/authService.js";

class AuthController {
    static async cadastrar(req, res) {
        try {
            const requisicao = await AuthService.cadastrar(req.body);

            return res
                .status(201)
                .json(requisicao);
        }
        catch (erro) {
            return res
                .status(400)
                .json({ mensagem: erro.message });
        }
    }


    /* ------------------------------------------------ */
    static async login(req, res) {
        const requisicao = await AuthService.login(req.body);
        try {
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
    
}
export default AuthController;
