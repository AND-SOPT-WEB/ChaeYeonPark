export type LoginInfo = "username" | "password";

export type LoginInfoType = {
  username: string;
  password: string;
};

export type SignupInfo = "username" | "password" | "hobby";

export type SignupInfoType = {
  username: string;
  password: string;
  hobby: string;
};

export interface SignupInfoProps {
  signupInfo: SignupInfoType;
  handleChangeSignupInfo: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: SignupInfo
  ) => void;
  handleChangeSignupStep: (step: SignupInfo) => void;
}
