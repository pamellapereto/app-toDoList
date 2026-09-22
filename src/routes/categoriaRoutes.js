import { Router } from "express";
import CategoriaController from "../controller/categoriaController.js";

const router = Router();

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