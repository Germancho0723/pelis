import { Router } from "express";
import { sample_genero, sample_movies, sample_reparto } from "../data";
import asyncHandler from "express-async-handler";
import { MoviesModel } from "../models/movie.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const moviesCount = await MoviesModel.countDocuments();
        if(moviesCount>0)
        {
            res.send("Los datos ya fueron cargados" );
            return;
        }
        await MoviesModel.create(sample_movies);
        res.send("Datos cargados: "+moviesCount);
    }
))

router.get("/", asyncHandler(
    async (req, res) => {
        const movies = await MoviesModel.find();
        res.send(movies);
    }
))

router.get("/buscar/:search", asyncHandler(async (req, res) => {
    const searchReg= new RegExp(req.params.search, 'i');
    const movies = await MoviesModel.find({nombrePeli: {$regex:searchReg}})
    res.send(movies);
}))

router.get("/genero", asyncHandler(
    async (req, res) => {
        const genero = await MoviesModel.aggregate([
            {
                $unwind: '$genero'
            },
            {
                $group:{
                    _id: '$genero',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id:0,
                    name:'$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        const all = {
            name: 'Todos',
            count: await MoviesModel.countDocuments()
        }

        genero.unshift(all);
        res.send(genero);
    }
))

router.get("/genero/:genero", asyncHandler(
    async (req, res) => {
        const movies = await MoviesModel.find({genero: req.params.genero})
        res.send(movies);
    }
))

router.get("/id/:movieId", asyncHandler(
    async (req, res) => {
        const movies = await MoviesModel.findById(req.params.movieId);
        res.send(movies);
    }
))

router.get("/name/:Name", asyncHandler(
    async (req, res) => {
        console.log(req.params.Name);
        const movies = await MoviesModel.find({nombrePeli: req.params.Name});
        console.log(movies);
        res.send(movies);
    }
))

export default router;