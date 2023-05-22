import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import movieRouter from './routers/movie.router';
import { dbConnect } from './configs/database.config';
import repartoRouter from './routers/reparto.router';
import { sample_users } from './data';
import jwt from "jsonwebtoken"
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200","http://192.168.1.100:4200"]
}));

app.use("/api/movies", movieRouter)
app.use("/api/reparto", repartoRouter)

app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("Dirección de correo y/o contraseña incorrectos");
    }
})

const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "Random Text", {
        expiresIn: "2d"
    });

    user.token = token;
    return user;
}

const port = 3000;
app.listen(port, () => {
    console.log("Sitio desde: http://localhost:" + port);
})