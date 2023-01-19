import express from "express"

export interface admin {
    id?: string,
    email: string,
    password: string
}

declare global {
    namespace Express {
        export interface Request {
            resolt: {
                id?: string
                title?: string
                price?: string
            },
            userId: string
        }
    }
}