import express from "express";

import { signIn, signUp } from "../controllers/user";

const router = express.Router();

router.post("/signIn", signIn);
router.post("signUp", signUp);

export default router;
