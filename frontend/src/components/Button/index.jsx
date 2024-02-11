import { useNavigate } from "react-router-dom";
import { ButtonContainerStyled } from "./styles";

<<<<<<< HEAD
const Button = ({ bgColor, type, children }) => {

	return (
		<ButtonContainerStyled 
			$bgColor={bgColor} 
			type={type}
		>
			{children}
		</ButtonContainerStyled>
=======
<<<<<<< Updated upstream
const Button = ({ bgColor, type = "button", children }) => {
	return (
		<ButtonContainerStyled $bgColor={bgColor} type={type}>{children}</ButtonContainerStyled>
=======
const Button = ({ children, bgColor, to }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`${to}`);
	};

	return (
		<ButtonContainerStyled 
			$bgColor={bgColor} 
			onClick={handleClick}
		>
			{children}
		</ButtonContainerStyled>
>>>>>>> Stashed changes
>>>>>>> front_Refatoracao
	);
};

export default Button;