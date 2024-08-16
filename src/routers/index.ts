import authRouter from "./auth";
import userRouter from "./user";
import { Router } from "express";

const router = Router();

router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);

export default router;