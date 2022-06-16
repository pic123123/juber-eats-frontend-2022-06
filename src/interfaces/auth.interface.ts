export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  ok: boolean;
  error?: string;
  token?: string;
}

export interface loginMutationInput {
  loginInput: LoginInput;
}

export interface loginMutationOutput {
  loginOutput: LoginOutput;
}
