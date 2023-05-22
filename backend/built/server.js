"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var movie_router_1 = __importDefault(require("./routers/movie.router"));
var database_config_1 = require("./configs/database.config");
var reparto_router_1 = __importDefault(require("./routers/reparto.router"));
var data_1 = require("./data");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200", "http://192.168.1.100:4200"]
}));
app.use("/api/movies", movie_router_1.default);
app.use("/api/reparto", reparto_router_1.default);
app.post("/api/users/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var user = data_1.sample_users.find(function (user) { return user.email === email && user.password === password; });
    if (user) {
        res.send(generateTokenResponse(user));
    }
    else {
        res.status(400).send("Dirección de correo y/o contraseña incorrectos");
    }
});
var generateTokenResponse = function (user) {
    var token = jsonwebtoken_1.default.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "Random Text", {
        expiresIn: "2d"
    });
    user.token = token;
    return user;
};
var port = 3000;
app.listen(port, function () {
    console.log("Sitio desde: http://localhost:" + port);
});
