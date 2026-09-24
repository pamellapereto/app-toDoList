import { Router } from "express";
import TarefaController from "../controller/tarefaController.js";

const router = Router();

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