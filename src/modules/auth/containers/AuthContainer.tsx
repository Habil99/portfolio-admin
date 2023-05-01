import { FC, PropsWithChildren, ReactNode } from "react";

type AuthContainerProps = {
  title: string;
  subtitle: string;
}

const AuthContainer: FC<PropsWithChildren<AuthContainerProps>> = ({ children, title, subtitle }) => {
  return (
    <div className="bg-primary border border-solid border-primary rounded-md p-8">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-sm text-secondary mb-3">{subtitle}</p>
      {children}
    </div>
  );
};

export default AuthContainer;
