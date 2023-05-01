import { useRegisterMutation } from "../../services/auth.service";
import { RegisterValues } from "../../types/register.type";
import { useContext } from "react";
import { NotificationContext } from "../../../../context";
import { userActions } from "../../../../store/user/user.slice";
import { useAppDispatch } from "../../../../store";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const dispatch = useAppDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const { notifyError, notifySuccess } = useContext(NotificationContext);
  const navigate = useNavigate();

  const onFinish = (values: RegisterValues) => {
    register({
      username: values.username,
      email: values.email,
      password: values.password,
    }).unwrap().then((response: any) => {
      dispatch(userActions.setUser(response.data));
      notifySuccess("Register success!");
      navigate("/");
    }).catch((error: any) => {
      notifyError(error.message);
      // TODO: display errors in form
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

export default useRegister;
