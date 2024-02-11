import { LinkStyled, TextContainerStyles, TextStyled } from "./styles";

const FormText = ({ text, to, linkText }) => {
	return (
		<TextContainerStyles>
			<TextStyled>{text}</TextStyled>
			<LinkStyled to={to}>{linkText}</LinkStyled>
		</TextContainerStyles>
	);
};

export default FormText;