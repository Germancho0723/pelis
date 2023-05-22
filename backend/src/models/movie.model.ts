import { Schema, model } from "mongoose";

export interface Movies {
    id:string;
    nombrePeli:string;
    director:string;
    genero:string[];
    duracion:string
    poster:string;
    fecha:string;
    resena:string;
    imdb:string;
}

export const MoviesSchema = new Schema<Movies>(
    {
        nombrePeli:{type:String, required:true},
        director:{type:String, required:true},
        genero:{type:[String]},
        duracion:{type:String, required:true},
        poster:{type:String, required:true},
        fecha:{type:String, required:true},
        resena:{type:String, required:true},
        imdb:{type:String}
    },{
        toJSON: {
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true 
    }   
);

export const MoviesModel = model<Movies>('movies', MoviesSchema);