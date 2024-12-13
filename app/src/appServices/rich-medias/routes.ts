import { Router } from "express";
const router = Router();

import { getRichMedias, getRichMediaByTool } from "./controller";

router.get("/", getRichMedias);

router.get("/tools", getRichMediaByTool);

export default router;
