import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import { ErrorHandle } from "./error/error"
dotenv.config()

const app: Express = express()

app.use(express.json())

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorHandle) {
        return res.status(err.status).json({
            message: err.message,
            status: err.status
        })
    }
    
    return res.status(500).json({
        message: 'Error in Server',
        status: 500
    })
})

app.all("/*", (_: Request, res: Response) => res.sendStatus(404))

export {
    app
}