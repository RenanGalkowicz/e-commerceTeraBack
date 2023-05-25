import express from "express";
const router = express.Router();

import controllers from "../controllers/userControllers.js";

router.get("/", controllers.getAll)
.post("/", controllers.createUser)
.delete("/:id", controllers.deleteUserById)
.patch("/:id", controllers.updateUserById)
.get("/:id", controllers.findUserById)

export default router;