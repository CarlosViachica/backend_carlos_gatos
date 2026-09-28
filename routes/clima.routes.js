import express from "express";
import multer from "multer";

import {obternerClima} from "../controllers/clima.controller.js";

const router = express.Router();

router.get("/clima", obternerClima);

export default router;