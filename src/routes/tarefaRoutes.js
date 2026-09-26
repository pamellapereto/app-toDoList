import { Router } from "express";
import TarefaController from "../controller/tarefaController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();
router.use(authMiddleware);

router.post(
    "/cadastrar",
    TarefaController.cadastrar
);

router.delete(
    "/remover/:id",
    TarefaController.remover
);

router.put(
    "/atualizar/:id",
    TarefaController.atualizar
);

export default router;