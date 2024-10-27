import jwt from 'jsonwebtoken';

export const authAdmin = (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ message: 'Admin not authorized: No token provided' });
        }

        const tokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!tokenVerified) {
            return res.status(401).json({ message: 'Admin not authorized: Invalid token' });
        }

        req.admin = tokenVerified.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Admin authorization failed' });
    }
};
