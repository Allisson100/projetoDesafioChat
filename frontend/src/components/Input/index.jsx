import { InputContainerStyled, InputStyled, SpanStyled } from "./styles";

const Input = ({ name, type, placeholder, placeholderColor, autocomplete, errorMessage, ...props }) => {
	return (
		<InputContainerStyled>
			<InputStyled 
				name={name}
				id={name}
				type={type} 
				placeholder={placeholder} 
				autoComplete={autocomplete}
				$placeholderColor={placeholderColor}
				$errorMessage={!!errorMessage}
				{...props}
			/>
			{errorMessage && <SpanStyled>{errorMessage}</SpanStyled>}
		</InputContainerStyled>
		
	);
};

export default Input;