import { Router } from "express";
import { sample_reparto } from "../data";
import asyncHandler from "express-async-handler";
import { RepartoModel } from "../models/reparto.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const repartoCount = await RepartoModel.countDocuments();
        if(repartoCount>0)
        {
            res.send("Los datos ya fueron cargados");
            return;
        }
        await RepartoModel.create(sample_reparto);
        res.send("Datos cargados: "+repartoCount);
    }
))

router.get("/", asyncHandler(
    async (req, res) => {
        const movies = await RepartoModel.find();
        res.send(movies);
    }
))

router.get("/:movieName", asyncHandler(
    asyncHandler(
        async (req, res) => {
            const movies = await RepartoModel.find({movie: req.params.movieName});
            res.send(movies);
        }
    )
))

export default router;