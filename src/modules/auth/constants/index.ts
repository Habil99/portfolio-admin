export const LOGIN_FORM_RULES = {
  username: [
    {
      required: true,
      message: "Please input your username!",
    }
  ],
  email: [
    {
      required: true,
      message: "Please input your email!",
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password!",
    },
  ],
};
