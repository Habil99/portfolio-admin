import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <div className="mt-4 flex items-center gap-2">
      <p className="text-sm text-secondary">Don't have an account?</p>
      <Link to="/auth/register"
            className="text-sm text-primary hover:text-link-hover">
        Register
      </Link>
    </div>
  );
};

export default LoginFooter;
