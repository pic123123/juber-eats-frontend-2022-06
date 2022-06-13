import React from "react";
import { isLoggedInVar } from "../apollo";

function LoggedOutRouter() {
  const onClick = () => {
    isLoggedInVar(true);
  };
  return (
    <>
      <h1>로그아웃 라우터</h1>
      <button onClick={onClick}> Click to LogIn</button>
    </>
  );
}

export default LoggedOutRouter;
