const { Signup, login, logout } = require('../controllers/AuthController');
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", login);
router.delete("/logout", logout);

module.exports = router;