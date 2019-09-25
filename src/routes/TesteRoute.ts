"use strict";

import {Router} from "express";
import * as controller from "../controllers/TesteController";
const router: Router = Router();

// Rotas da Entidade
router.put("/createOrUpdate", controller.createOrUpdate);
router.get("/list", controller.list);
router.get("/findById/:id", controller.findById);
router.delete("/:id", controller.deleteEntity);

export default router;
