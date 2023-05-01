import LoginForm from "./LoginForm";
import AuthContainer from "../../containers/AuthContainer";
import LoginFooter from "./LoginFooter";

const Login = () => {
  return (
    <AuthContainer
      title="Login (Portfolio Admin)"
      subtitle="Enter your email and password to login"
    >
      <LoginForm />
      <LoginFooter />
    </AuthContainer>
  );
};

export default Login;
