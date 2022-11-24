import axios, { AxiosError } from "axios";
import { UserDateRegister } from "../data/types";
import { openModalActionCreator } from "../redux/features/Uislice/Uislice";
import { useAppDispatch } from "../redux/hooks";
import AxiosTypeError from "./types";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const dispach = useAppDispatch();

  const registerUser = async (registerData: UserDateRegister) => {
    try {
      await axios.post(`${apiUrl}/users/register`);
      dispach(
        openModalActionCreator({
          isError: false,
          messageFeedback: "Welcome to the Api Rest from sibaritus",
        })
      );
    } catch (error: unknown) {
      dispach(
        openModalActionCreator({
          isError: true,
          messageFeedback: (error as AxiosError<AxiosTypeError>).response?.data
            .error!,
        })
      );
    }
  };
  return registerUser;
};

export default useUser;
