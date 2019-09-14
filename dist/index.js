"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes/routes");
const app = express_1.default();
const server = http_1.default.createServer(app);
const port = 3000;
const routePrv = new routes_1.Routes();
// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
routePrv.routes(app);
// Start Express Server
server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("API Rodando na porta " + port);
});
//# sourceMappingURL=index.js.map