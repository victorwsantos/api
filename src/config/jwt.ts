import jwt from "jsonwebtoken"


const secret = 'uhushUHSauhsaUhauxOAUOOans'

export const sing = (payload: object) => jwt.sign(payload, secret, {expiresIn: 86400})
export const verify = (token: string) => jwt.verify(token, secret)