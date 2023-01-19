import { NextFunction, Request, Response } from 'express';
import { ErrorHandle } from '../../error/error';
import { food } from '../../types/types';
import postgres from '../../utils/postgres';
import { dbFoodGet, dbFootPost } from './model';

export const Get = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const allFood: food[] = await postgres.fetchAll<food>(dbFoodGet)

        res.json({
            message: "Read",
            status: 200,
            data: allFood
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const Post = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { title } = req.resolt

        if (typeof title !== 'string') 
            throw new ErrorHandle('Bad Request', 401)

        const newFood: food = await postgres.fetchOne<food>(dbFootPost, title)

        if (!newFood)
            throw new ErrorHandle('Error in Database', 500)

        res.json({
            message: 'Created',
            status: 201,
            data: newFood
        })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}