import { Router } from "express";
import { googleAuth } from "../controllers/googleAuthController";
const googleAuthRouter = Router();

googleAuthRouter.post("/", googleAuth);
export default googleAuthRouter;
