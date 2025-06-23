import express from "express"
import UserControllers from "../controllers/users"

const router = express()


router.get("/", UserControllers.getAllUsers)
router.post("/", UserControllers.createUser)
router.get("/:id", UserControllers.getUserById)
router.patch("/:id", UserControllers.updateUser)
router.delete("/:id", UserControllers.deleteUser)

export default router