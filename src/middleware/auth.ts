import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET as string;

export function authMiddleware(req:Request,res:Response,next:NextFunction){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:'token não fornecido'});
    }
    const token = authHeader.split(" ")[1] as string;

    try {
        const payload = jwt.verify(token, JWT_SECRET) as unknown as {userId:number};
        (req as any).userId = payload.userId;
        next();
    } catch (error) {
        return res.status(401).json({message:'token invalido'});
    }
}

