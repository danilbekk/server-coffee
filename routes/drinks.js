import { Router } from "express";
import Drinks from "../controllers/Drinks.js";
const router = Router();

router.get("/drinks", Drinks.getAll);
router.get("/drinks/in-stock", Drinks.getinStock);
router.get("/drinks/:id", Drinks.getById);
router.post("/drinks", Drinks.post);
router.delete("/drinks/:id", Drinks.delete);
router.patch("/drinks/:id", Drinks.update);

export default router;
