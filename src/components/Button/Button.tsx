import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  isDisable?: boolean;
  type: "button" | "submit";
  className?: string;
}

const Button = ({
  text,
  action,
  type,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} type={type} className={className}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
