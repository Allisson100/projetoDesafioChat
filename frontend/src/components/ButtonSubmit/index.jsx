import { ButtonContainerStyled } from "./styles";

const ButtonSubmit = ({ bgColor, children }) => {

	return (
		<ButtonContainerStyled 
			$bgColor={bgColor} 
			type="submit"
		>
			{children}
		</ButtonContainerStyled>
	);
};

export default ButtonSubmit;