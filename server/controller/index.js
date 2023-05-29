const axios = require("axios");

module.exports = {
  accessToken: async (req, res) => {
    try {
      const { code } = req.body;
      const accessToken = await axios({
        //깃허브로 부터 받은 엑세스 토큰 값
        url: "https://github.com/login/oauth/access_token", // 프론트(사용자)가 받아온 인가코드와 (id, secret값)을 다시 깃허브에 보내는 코드
        method: "POST",
        data: {
          client_id: process.env.GIT_CLIENT_ID,
          client_secret: process.env.GIT_CLIENT_SECRET,
          code: code, //프론트에서 받아온 코드값
        },
      });
      const item = accessToken.data; // 엑세스 토큰에서 data값을 클라이언트에게 반환해준다
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
