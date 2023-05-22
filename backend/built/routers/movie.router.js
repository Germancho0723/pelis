"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_1 = require("../data");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var movie_model_1 = require("../models/movie.model");
var router = (0, express_1.Router)();
router.get("/seed", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var moviesCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, movie_model_1.MoviesModel.countDocuments()];
            case 1:
                moviesCount = _a.sent();
                if (moviesCount > 0) {
                    res.send("Los datos ya fueron cargados");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, movie_model_1.MoviesModel.create(data_1.sample_movies)];
            case 2:
                _a.sent();
                res.send("Datos cargados: " + moviesCount);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, movie_model_1.MoviesModel.find()];
            case 1:
                movies = _a.sent();
                res.send(movies);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/buscar/:search", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchReg, movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchReg = new RegExp(req.params.search, 'i');
                return [4 /*yield*/, movie_model_1.MoviesModel.find({ nombrePeli: { $regex: searchReg } })];
            case 1:
                movies = _a.sent();
                res.send(movies);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/genero", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var genero, all;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, movie_model_1.MoviesModel.aggregate([
                    {
                        $unwind: '$genero'
                    },
                    {
                        $group: {
                            _id: '$genero',
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            name: '$_id',
                            count: '$count'
                        }
                    }
                ]).sort({ count: -1 })];
            case 1:
                genero = _b.sent();
                _a = {
                    name: 'Todos'
                };
                return [4 /*yield*/, movie_model_1.MoviesModel.countDocuments()];
            case 2:
                all = (_a.count = _b.sent(),
                    _a);
                genero.unshift(all);
                res.send(genero);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/genero/:genero", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, movie_model_1.MoviesModel.find({ genero: req.params.genero })];
            case 1:
                movies = _a.sent();
                res.send(movies);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/id/:movieId", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, movie_model_1.MoviesModel.findById(req.params.movieId)];
            case 1:
                movies = _a.sent();
                res.send(movies);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/name/:Name", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.params.Name);
                return [4 /*yield*/, movie_model_1.MoviesModel.find({ nombrePeli: req.params.Name })];
            case 1:
                movies = _a.sent();
                console.log(movies);
                res.send(movies);
                return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
