import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDateRegister } from "../data/types";
import { openModalActionCreator } from "../redux/features/Uislice/Uislice";
import { userLoginActionCreator } from "../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { JwtCustomPayload, UserLogin } from "../redux/types/types";
import decodeToken from "../utils/testUtils/decodeToken";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerUser = async (userRegisterData: UserDateRegister) => {
    try {
      await axios.post(`${apiUrl}/users/register`, userRegisterData);
      dispatch(
        openModalActionCreator({
          isError: false,
          messageFeedback: "A la web de sibaritus",
        })
      );
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          messageFeedback: "No te has podido registrar",
        })
      );
    }
  };
  const userLogin = async (loginData: UserLogin) => {
    try {
      const loginResponse = await axios.post(
        `${apiUrl}/users/login`,
        loginData
      );

      const { token } = await loginResponse.data;
      const loggedUser: JwtCustomPayload = decodeToken(token);

      dispatch(userLoginActionCreator({ ...loggedUser, token }));
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          messageFeedback: "No te pudiste logear",
        })
      );
    }
  };

  return { registerUser, userLogin };
};

export default useUser;
