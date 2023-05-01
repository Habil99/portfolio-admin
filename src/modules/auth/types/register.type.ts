import { LoginValues } from "./login.type";

export type RegisterValues = LoginValues & {
  username: string;
}
