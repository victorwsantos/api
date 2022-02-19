const jwt = require('jsonwebtoken')

const secret = 'spiadnPNPANDadnpNPIASNFF2P3N'
export const jwtConfig = {
  sing: (payload: any) => { jwt.sing(payload, secret) },
  verify: (token: any) => { jwt.verify(token, secret) }
}

