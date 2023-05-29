import axios from "axios";
import React from "react";
import "./login.css";

export default function Login() {
  const github = () => {
    window.open(
      //사용자가 로그인 버튼을 눌렀을때 깃허브로 부터 Authorization을 받아오는 코드
      "https://github.com/login/oauth/authorize" +
        `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`, // 이때 해당 사이트가 깃허브에 등록을 했는지 확인을 위해 CLIENTID가 필요함
      "_self"
      // 이후 깃허브에 등록한 콜백 URL로 반환이 되는데 -> 여기서 APP.JS를 보면 콜백 URL에 GIT 컴포넌트에 걸리게 세팅을 함
    );
  };

  const google = () => {};

  const kakao = () => {};

  return (
    <div>
      <div className="loginContainer">
        <div className="inputGroup">
          <button className="loginButton" onClick={github}>
            <img src="../assets/git.jpg" alt="" className="buttonImg" />
          </button>
          <button className="loginButton" onClick={google}>
            <img src="../assets/google.png" alt="" className="buttonImg" />
          </button>
          <button className="loginButton" onClick={kakao}>
            <img src="../assets/kakao.png" alt="" className="buttonImg" />
          </button>
        </div>
      </div>
    </div>
  );
}
