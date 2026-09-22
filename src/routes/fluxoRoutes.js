import { Router } from "express";

import FluxoController from "../controller/fluxoController.js";

const router = Router();

router.post(
    "/cadastrar",
    FluxoController.cadastrar
);

export default router;