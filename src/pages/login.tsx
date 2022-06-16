import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { isLoggedInVar } from "../apollo";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../common/common.constatns";
import { FormErorr } from "../components/form-error";

interface ILoginForm {
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
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = () => {
    console.log(getValues());
    // isLoggedInVar(true);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
        <h3 className="text-2xl text-gray-800">로그인</h3>
        <form
          className="grid gap-3 mt-5 px-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: "이메일 주소를 입력해 주시기 바랍니다.",
              maxLength: 100,
              pattern: REGEX_EMAIL,
            })}
            className="input mb-3"
          />
          {errors.email?.message && (
            <FormErorr errorMessage={errors.email?.message} />
          )}
          {errors.email?.type === "maxLength" && (
            <FormErorr
              errorMessage={
                "이메일 주소는 100자 이하로 입력해 주시기 바랍니다."
              }
            />
          )}
          {errors.email?.type === "pattern" && (
            <FormErorr
              errorMessage={"이메일 주소 형식에 맞게 입력해 주시기 바랍니다."}
            />
          )}
          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: "비밀번호를 입력해 주시기 바랍니다",
              minLength: 8,
              pattern: REGEX_PASSWORD,
            })}
            className="input"
          />
          {errors.password?.message && (
            <FormErorr errorMessage={errors.password?.message} />
          )}
          {errors.password?.type === "minLength" && (
            <FormErorr
              errorMessage={
                "비밀번호는 8자 이상 영어+숫자+특수문자를 조합해 주시기 바랍니다."
              }
            />
          )}
          {errors.password?.type === "pattern" && (
            <FormErorr
              errorMessage={
                "비밀번호는 8자 이상 영어+숫자+특수문자를 조합해 주시기 바랍니다."
              }
            />
          )}
          <button type="submit" className="btn mt-3">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
