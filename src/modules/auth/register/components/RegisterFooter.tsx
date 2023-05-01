import { Link } from "react-router-dom";

const RegisterFooter = () => {
  return (
    <div className="mt-4 flex items-center gap-2">
      <p className="text-sm text-secondary">Already have an account?</p>
      <Link to="/auth/login"
            className="text-sm text-primary hover:text-link-hover">
        Login
      </Link>
    </div>
  );
};

export default RegisterFooter;
