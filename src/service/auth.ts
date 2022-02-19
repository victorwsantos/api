const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

export const sing = (payload: JsonWebKey) => { jwt.sing(payload, secret) }
export const verify = (token: any) => { jwt.verify(token, secret) }


