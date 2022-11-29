import { useEffect } from "react";
import { closeModalActionCreator } from "../../redux/features/Uislice/Uislice";
import { useAppDispatch } from "../../redux/hooks";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  messageFeedback: string;
  isError: boolean;
}

const Modal = ({ messageFeedback, isError }: ModalProps): JSX.Element => {
  const dispach = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispach(closeModalActionCreator());
    }, 4000);
  }, [dispach]);

  return (
    <ModalStyled className={isError ? "modal-error" : "modal-correct"}>
      <span className="modal-heading">
        {isError ? "LO SIENTO!!" : "BIENVENIDO "}
      </span>
      <span className="modal-text">{messageFeedback}</span>
    </ModalStyled>
  );
};

export default Modal;
