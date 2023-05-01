import { LoginValues } from "../../types/login.type";
import { useNotification } from "context";
import { useAppDispatch } from "store";
import { userActions } from "store/user/user.slice";
import { useLoginMutation } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { notifyError, notifySuccess } = useNotification();
  const navigate = useNavigate();

  const onFinish = (values: LoginValues) => {
    login({
      email: values.email,
      password: values.password,
    }).unwrap().then((response: any) => {
      dispatch(userActions.setUser(response.data));
      notifySuccess("Login success!");
      navigate("/");
    }).catch((error: any) => {
      notifyError(error.message);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return {
    onFinish,
    onFinishFailed,
    isLoading,
  };
};

export default useLogin;
