import { Router } from "express";
import GrupoController from "../controllers/grupo.js";

const router = Router();

router.get("/api/grupo", GrupoController.getGrupos);

export default router;
