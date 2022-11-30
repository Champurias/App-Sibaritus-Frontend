import Layout from "../Layout/Layout";
import Modal from "../Modal/Modal";
import { useAppSelector } from "../../redux/hooks";

const App = () => {
  const {
    modal: { isOpen, messageFeedback, isError },
  } = useAppSelector(({ uiModal }) => uiModal);

  return (
    <div className="app">
      {isOpen && <Modal messageFeedback={messageFeedback} isError={isError} />}
      <Layout />
    </div>
  );
};

export default App;
