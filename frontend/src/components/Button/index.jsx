import { useNavigate } from "react-router-dom";
import { ButtonContainerStyled } from "./styles";

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
	);
};

export default Button;