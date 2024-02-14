import { InputContainerStyled, InputStyled, SpanStyled } from "./styles";

const Input = ({ name, type, placeholder, placeholderColor, autocomplete, errorMessage, noBorderRadios, ...props }) => {
	return (
		<InputContainerStyled>
			<InputStyled
				$noBorderRadios={noBorderRadios}
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