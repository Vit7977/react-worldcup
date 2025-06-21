import { Router } from "express";
import PlayerController from "../controllers/jogador.js";

const router = Router();

router.get("/api/jogador", PlayerController.getPlayer);

router.post("/api/jogador", PlayerController.addPlayer);

router.put("/api/jogador/:id", PlayerController.updatePlayer)

router.delete("/api/jogador/:id", PlayerController.deletePlayer)

export default router;
