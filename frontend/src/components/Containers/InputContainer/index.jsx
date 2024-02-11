import { InputContainerStyled } from "./styles";

const InputContainer = ({ children }) => {
	return (
		<InputContainerStyled>
			{children}
		</InputContainerStyled>
	);
};

export default InputContainer;