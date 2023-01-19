import { NextFunction, Request, Response } from 'express';
import { food } from '../../types/types';
import postgres from '../../utils/postgres';
import { dbFoodGet } from './model';

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