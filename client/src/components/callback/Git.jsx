import axios from "axios";
import React, { useContext, useEffect } from "react";
import { createContext } from "react";

//
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/LoginContext";

export default function Git() {
  const { accessToken, setAccessToken, loginType, setLoginType } =
    useContext(UserContext); //UserContext를 통해  App.js 받은 state값들을 가져올수 있다.

  const navigate = useNavigate(); // 리다이렉트 가능하게 만들어주는 코드

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code"); // 깃으로부터 받은 Authorization 코드를 파싱하는 변수
      if (code) {
        axios({
          url: "http://localhost:8112/auth/accesstoken", // 토큰에 데이터에 담아 서버에 보낸다.
          method: "post",
          data: {
            code: code,
          },
        }).then((result) => {
          // 서버에서 받은 data를 result로 받아오고 파싱을 한다
          const accessToken = result.data.split("=")[1].split("&")[0];
          setAccessToken(accessToken); // 엑세스 토큰과 로그인 타입을 지정해준다.
          setLoginType("GIT");
          navigate("/"); // 모든 과정이 종료되었으므로 홈으로 리다이렉트 해준다.
        });
      }
    } catch (error) {}
  }, []);

  return <div>Git Callback</div>;
}
