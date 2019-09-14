"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const TesteRoute_1 = __importDefault(require("./TesteRoute"));
class Routes {
    routes(app) {
        // app.route("/").get((req: Request, res: Response) => {
        //   res.status(200).send(res.req.body); // Envio de Objetos e requisição
        // });
        app.use("/teste", TesteRoute_1.default);
        // Habilita o CORS
        app.use(cors_1.default());
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map