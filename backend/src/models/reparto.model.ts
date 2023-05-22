import { Schema, model } from "mongoose";

export interface Reparto{
    id:string;
    movie:string;
    nombreAct:string;
    personaje:string;
    imagen:string;
  }

  export const RepartoSchema = new Schema<Reparto>(
    {
        movie:{type:String, required:true},
        nombreAct:{type:String, required:true},
        personaje:{type:String, required:true},
        imagen:{type:String, required:true}
    },
    {
        timestamps: true,
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        }
    });

    export const RepartoModel = model<Reparto>('reparto', RepartoSchema);