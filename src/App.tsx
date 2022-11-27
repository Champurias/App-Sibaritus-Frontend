import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
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
      <Layout />
    </div>
  );
};

export default App;
