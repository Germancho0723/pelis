"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesModel = exports.MoviesSchema = void 0;
var mongoose_1 = require("mongoose");
exports.MoviesSchema = new mongoose_1.Schema({
    nombrePeli: { type: String, required: true },
    director: { type: String, required: true },
    genero: { type: [String] },
    duracion: { type: String, required: true },
    poster: { type: String, required: true },
    fecha: { type: String, required: true },
    resena: { type: String, required: true },
    imdb: { type: String }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.MoviesModel = (0, mongoose_1.model)('movies', exports.MoviesSchema);
