import jwt from "jsonwebtoken";
function authMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res
            .status(401)
            .json({ mensagem: "Token não informado" });
    }
    const partes = authorization.split(" ");
    if (partes.length !== 2 || partes[0] !== "Bearer") {
        return res
            .status(401)
            .json({ mensagem: "Formato do token está INVÁLIDO!" });
    }
    const token = partes[1];
    try {
        const dadosToken = jwt.verify(
            token,
            process.env.JWT_TOKEN
        );
        req.usuarioId = Number(dadosToken.sub);
        next();
    }
    catch (erro) {
        return res 
            .status(401)
            .json({mensagem: "Token inválido ou expirado"});
    }
}
export default authMiddleware;