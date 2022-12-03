import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  top: 50%;

  &.modal-correct {
    background-color: #00ba00;
    z-index: 5000;
  }
  &.modal-error {
    background-color: #fc0005;
    z-index: 5000;
  }
`;

export default ModalStyled;
