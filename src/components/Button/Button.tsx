import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  isDisable?: boolean;
  type: "button" | "submit";
}

const Button = ({ text, action, type }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
