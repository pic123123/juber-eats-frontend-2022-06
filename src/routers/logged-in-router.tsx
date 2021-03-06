import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { isLoggedInVar } from "../apollo";

interface ILogin {
  email: string;
  password: string;
}
function LoggedInRouter() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ILogin>();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data);
    isLoggedInVar(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register("email")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default LoggedInRouter;
