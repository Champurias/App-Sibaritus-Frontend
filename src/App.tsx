import Modal from "./components/Modal/Modal";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const {
    modal: { isOpen, messageFeedback, isError },
  } = useAppSelector(({ uiModal }) => uiModal);

  return (
    <div className="app">
      {isOpen && (
        <Modal
          messageFeedback={messageFeedback}
          isOpen={isOpen}
          isError={isError}
        />
      )}
      <RegisterForm />
    </div>
  );
};

export default App;
