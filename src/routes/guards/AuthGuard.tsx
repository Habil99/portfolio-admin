import { store } from "../../store";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AuthGuardProps = PropsWithChildren & {
  isAuthPage?: boolean;
};

const AuthGuard: FC<AuthGuardProps> = ({ children, isAuthPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuth = useMemo(() => store.getState().user.isAuthenticated, [store.getState().user, location.pathname]);

  useEffect(() => {
    if (isAuth && isAuthPage) {
      navigate("/", { replace: true });
    }
    if (!isAuth && !isAuthPage) {
      navigate("/auth/login", { replace: true });
    }
  }, [location.pathname]);
  if (isAuth && isAuthPage) {
    return null;
  }

  if (!isAuth && !isAuthPage) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
