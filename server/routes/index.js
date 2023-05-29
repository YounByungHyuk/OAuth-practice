const router = require("express").Router();
const { accessToken, callback } = require("../controller");

router.post("/accesstoken", accessToken); // 받아온 토큰값

module.exports = router;
