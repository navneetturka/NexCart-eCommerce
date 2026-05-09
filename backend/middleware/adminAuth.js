import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const tokenFromHeader = req.headers.token;
    const authHeader = req.headers.authorization;
    const bearerToken =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : null;
    const token = tokenFromHeader || bearerToken;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Admin login required." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Admin token payload is the email+password combo string
    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Admin login required." });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

export default adminAuth;
