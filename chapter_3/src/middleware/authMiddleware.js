import jwt from 'jsonwebtoken'

function authMiddleware(req, res, next) {
    const token = req.headers['authorization']
    console.log('Auth middleware activated with token', token)

    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {return res.status(401).json({message: "Invalid token"})}
        const userId = decoded.id
        console.log('Auth middleware set req.userId to', userId)
        req.userId = userId
        next()
    })
}

export default authMiddleware