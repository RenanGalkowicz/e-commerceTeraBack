import express from "express";
const router = express.Router();

import controllers from "../controllers/clothesControllers.js";

router.get("/", controllers.getAll)
.post("/", controllers.createClothes)
.delete("/:id", controllers.deleteClotheById)
.patch("/:id", controllers.updateClotheById)

export default router;