import { Router } from "express";
import CategoriaController from "../controller/categoriaController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.use(authMiddleware);

router.post(
    "/cadastrar",
    CategoriaController.cadastrar
);

router.put(
    "/atualizar/:id",
    CategoriaController.atualizar
);

router.delete(
    "/remover/:id",
    CategoriaController.remover
);

export default router;