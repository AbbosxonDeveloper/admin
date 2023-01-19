import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ErrorHandle } from "../error/error";

export default (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const { error, value } = schema.validate(req.body)
    
            if (error) {
                throw new ErrorHandle(`${error}`, 401)
            }
    
            req.resolt = value
            next()
        } catch (error) {
            console.log(error)
            next(error)
        }   
    }
}