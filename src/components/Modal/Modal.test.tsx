import { render, screen } from "@testing-library/react";
import { closeModalActionCreator } from "../../redux/features/Uislice/Uislice";
import Modal from "./Modal";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a modal component", () => {
  describe("When it's intanciated'", () => {
    test("Then after 4000 seconds the feedback  should be close", () => {
      const modalError = false;

      const modalmessage = "No te has podido registrar";
      jest.useFakeTimers();

      render(<Modal isError={modalError} messageFeedback={modalmessage} />);
      jest.advanceTimersByTime(4000);

      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
    test("The it should  show with the text 'LO SIENTO'", () => {
      const modalError = true;

      const modalmessage = "No te has podido registrar";
      const isMessage = "LO SIENTO!!";
      render(<Modal isError={modalError} messageFeedback={modalmessage} />);

      const title = screen.getByText(isMessage);

      expect(title).toBeInTheDocument();
    });
  });
});
