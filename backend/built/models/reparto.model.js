"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartoModel = exports.RepartoSchema = void 0;
var mongoose_1 = require("mongoose");
exports.RepartoSchema = new mongoose_1.Schema({
    movie: { type: String, required: true },
    nombreAct: { type: String, required: true },
    personaje: { type: String, required: true },
    imagen: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.RepartoModel = (0, mongoose_1.model)('reparto', exports.RepartoSchema);
