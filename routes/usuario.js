import { Router } from "express";
import { getUsuariosController } from "../controller/usuario.js";

const router = Router();

router.get('/usuarios', getUsuariosController);


export default router;