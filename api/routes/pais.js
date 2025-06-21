import { Router } from "express";
import PaisController from "../controllers/pais.js";

const router = Router();

router.get("/api/pais", PaisController.getPais);

router.post("/api/pais", PaisController.addPais);

router.put("/api/pais/:id", PaisController.updatePais);

router.delete("/api/pais/:id", PaisController.deletePais);

export default router;
