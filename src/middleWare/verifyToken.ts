import { NextFunction, Request, Response } from "express"
import { ErrorHandle } from "../error/error"
import JWT from "../utils/JWT"

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token } = req.headers

        if (typeof auth_token === "string") {
            const userId = JWT.verify(auth_token)
    
            if (typeof userId === 'string') {
                req.userId = userId
                next()
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