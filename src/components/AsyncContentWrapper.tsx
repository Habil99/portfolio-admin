import { FC, PropsWithChildren } from "react";
import { Loading3QuartersOutlined } from "@ant-design/icons";

interface AsyncContentWrapperProps {
  isLoading: boolean;
  isError: boolean;
  error?: any;
}

const AsyncContentWrapper: FC<PropsWithChildren<AsyncContentWrapperProps>> = ({
                                                                                isError,
                                                                                isLoading,
                                                                                error,
                                                                                children,
                                                                              }) => {

  if (isLoading) {
    return <div className="w-full h-full flex items-center justify-center">
      <Loading3QuartersOutlined spin className="text-[52px]" />
    </div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (!isLoading && !isError) {
    return <>{children}</>;
  }

  return <></>;
};

export default AsyncContentWrapper;
