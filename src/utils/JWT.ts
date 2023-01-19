import jwt from "jsonwebtoken"
import { secretKey } from "../config/config"
import { ErrorHandle } from "../error/error"

export default {
    sing: (payload: string) => jwt.sign(payload, secretKey),
    verify: (token: string) => jwt.verify(token, secretKey, (err, data): string => {
        if (err instanceof jwt.JsonWebTokenError) {
            throw new ErrorHandle('Invalid Token', 403)
        }   

        return `${data}`
    })
}