import { Router } from "express";
import TarefaController from "../controller/tarefaController.js";

const router = Router();

router.post(
    "/cadastrar",
    TarefaController.cadastrar
);

export default router;