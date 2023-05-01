import { FC, PropsWithChildren } from "react";
import { Typography } from "antd";

interface AppModuleProps {
  title: string;
}

const AppModule: FC<PropsWithChildren<AppModuleProps>> = ({
                                                            title,
                                                            children,
                                                          }) => {
  return (
    <>
      <Typography.Title level={3}>{title}</Typography.Title>
      <div className="p-4 rounded bg-secondary">
        {children}
      </div>
    </>
  );
};

export default AppModule;
