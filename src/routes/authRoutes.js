import { Router } from "express";
import AuthController from "../controller/authController.js";

const router = Router();

router.post(
    "/cadastrar",
    AuthController.cadastrar
);

router.post(
    "/login",
    AuthController.login
)

export default router;