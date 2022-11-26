import { useEffect } from "react";
import { closeModalActionCreator } from "../../redux/features/Uislice/Uislice";
import { useAppDispatch } from "../../redux/hooks";
import { ModalState } from "../../redux/types/types";
import ModalStyled from "./ModalStyled";

const Modal = ({
  isOpen,
  messageFeedback,
  isError,
}: ModalState): JSX.Element => {
  const dispach = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispach(closeModalActionCreator());
      }, 4000);
    }
  }, [dispach, isOpen]);

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
