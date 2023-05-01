import RegisterForm from "./RegisterForm";
import AuthContainer from "../../containers/AuthContainer";
import RegisterFooter from "./RegisterFooter";

const Register = () => {
  return (
    <AuthContainer
      title="Register (Portfolio Admin)"
      subtitle="Get your free Portfolio Admin account now."
    >
      <RegisterForm />
      <RegisterFooter />
    </AuthContainer>
  );
};

export default Register;
