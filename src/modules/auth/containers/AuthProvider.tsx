import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useGetUserQuery } from "../services/auth.service";
import { App } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isSuccess, isError } = useGetUserQuery();

  const animationDelay = 1500;
  const [showLoader, setShowLoader] = useState(false);

  // this is to show the loader for a minimum of 1.5 seconds, I know it's not the best way to do it, but it works :D
  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, animationDelay);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      // window.location.href = "/auth/login";
    }
  }, [isError]);

  if (showLoader) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: animationDelay / 1000 }}
      >
        <App className="min-h-screen flex items-center justify-center">
          <img className="w-80" src="/assets/lottie/loader.gif" alt="" />
        </App>
        ;
      </motion.div>
    );
  }

  if (!showLoader && isSuccess) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      </motion.div>
    );
  }

  if (!showLoader && isError) {
    return <>{children}</>;
  }

  return <></>;
};

export default AuthProvider;
