import { ButtonContainerStyled } from "./styles";

const Button = ({ bgColor, type, children }) => {
	return (
		<ButtonContainerStyled $bgColor={bgColor} type={type}>{children}</ButtonContainerStyled>
	);
};

export default Button;