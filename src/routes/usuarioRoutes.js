import { Router } from "express";
import UsuarioController from "../controller/usuarioController.js";

const router = Router();

router.put(
    "/atualizar/:id",
    UsuarioController.atualizar
);

//Rota para excluir conta de usuário
router.delete(
    "/remover/:id",
    UsuarioController.remover
);

export default router;

