import { InputContainerStyled } from "./styles";

const InputContainer = ({ children, marginBottom }) => {
	return (
		<InputContainerStyled $marginBottom={marginBottom}>
			{children}
		</InputContainerStyled>
	);
};

export default InputContainer;