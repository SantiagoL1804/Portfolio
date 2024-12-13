import express from "express";
const router = express.Router();

import richMediaRoutes from "../appServices/rich-medias/routes";

//! Middlewares go here

router.use("/rich-medias", richMediaRoutes);

export default router;
