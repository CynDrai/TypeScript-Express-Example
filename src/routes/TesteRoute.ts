"use strict";

import {Router} from "express";
import * as controller from "../controllers/TesteController";

const router: Router = Router();

router.get("/list", controller.list);

export default router;
