import { ButtonContainerStyled } from "./styles";

const Button = ({ bgColor, type = "button", children }) => {
	return (
		<ButtonContainerStyled $bgColor={bgColor} type={type}>{children}</ButtonContainerStyled>
	);
};

export default Button;