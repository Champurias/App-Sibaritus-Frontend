import axios from "axios";
import { UserDateRegister } from "../data/types";
import { openModalActionCreator } from "../redux/features/Uislice/Uislice";
import { useAppDispatch } from "../redux/hooks";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const dispach = useAppDispatch();

  const registerUser = async (userRegisterData: UserDateRegister) => {
    try {
      await axios.post(`${apiUrl}/users/register`, userRegisterData);
      dispach(
        openModalActionCreator({
          isError: false,
          messageFeedback: "A la web de sibaritus",
        })
      );
    } catch (error: unknown) {
      dispach(
        openModalActionCreator({
          isError: true,
          messageFeedback: "No te has podido registrar",
        })
      );
    }
  };
  return { registerUser };
};

export default useUser;
