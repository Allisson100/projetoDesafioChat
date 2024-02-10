import { InputContainerStyled, InputStyled, SpanStyled } from "./styles";

const Input = ({ type, placeholder, placeholderColor, autocomplete, errorMessage }) => {
	return (
		<InputContainerStyled>
			<InputStyled 
				type={type} 
				placeholder={placeholder} 
				autoComplete={autocomplete}
				$placeholderColor={placeholderColor}
			/>
			<SpanStyled>{errorMessage}</SpanStyled>
		</InputContainerStyled>
		
	);
};

export default Input;