import React from "react";
import { isLoggedInVar } from "../apollo";

function LoggedInRouter() {
  const onClick = () => {
    isLoggedInVar(false);
  };
  return (
    <>
      <h1>로그인 라우터 </h1>
      <button onClick={onClick}> Click to LogOut</button>
    </>
  );
}

export default LoggedInRouter;
