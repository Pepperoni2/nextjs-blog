import jwt from 'jsonwebtoken' // import the jwt libary for creating authentication tokens

export const createAccessToken = (payload) => { // output parameter 'payload'
    // creating jwt Access Token for user Session, expires in 15min
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}
// credentials for user-session
export const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}
// authentication of the user
export const createAuthenticationToken = (payload) => {
    return jwt.sign(payload, process.env.AUTHENTICATION_TOKEN_SECRET, {expiresIn: '10m'})
}