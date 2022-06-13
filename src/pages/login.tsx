import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { isLoggedInVar } from "../apollo";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../common/common.constatns";

interface ILogin {
  email: string;
  password: string;
}
function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<ILogin>();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data);
    isLoggedInVar(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: true,
            maxLength: 50,
            pattern: REGEX_EMAIL,
          })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: REGEX_PASSWORD,
          })}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default Login;
