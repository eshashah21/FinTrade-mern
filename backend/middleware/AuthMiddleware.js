const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false, message: "Access denied. No token provided." });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY); 
    req.userId = decodedToken.id; 

    const user = await UserModel.findById(req.userId);
    if (!user) {
        return res.json({ status: false, message: "User not found." });
    }
    req.user = user;
    next(); 

  } catch (error) {
    console.error("Token verification failed:", error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ status: false, message: "Token expired. Please log in again." });
    }

    return res.status(401).json({ status: false, message: "Invalid token. Please log in again." });
  }
};