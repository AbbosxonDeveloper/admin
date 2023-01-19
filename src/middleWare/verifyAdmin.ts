import { NextFunction, Request, Response } from "express"
import { admin } from "../types/types"
import { ErrorHandle } from "../error/error"
import JWT from "../utils/JWT"
import postgres from '../utils/postgres';

export default async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token } = req.headers
        if (typeof auth_token === "string") {
            const userId = JWT.verify(auth_token)

            if (typeof userId === 'string') {
                const admin: admin | undefined = await postgres.fetchOne<admin | undefined>(`SELECT * from users where user_id = $1`, userId)
                
                if (admin) {
                    if (admin.email === 'akmal@gmail.com') {
                        req.userId = userId
                        next()
                    } else {
                        throw new ErrorHandle('Siz Admin emassiz 2', 401)
                    }
                } else {
                    throw new ErrorHandle('Siz Admin emassiz 1', 401)
                }
            } else {
                throw new ErrorHandle('Not Token', 401)
            }
        } else {
            throw new ErrorHandle('Not Token', 401)
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}