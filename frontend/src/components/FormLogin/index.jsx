import Button from "../Button";
import FormContainer from "../Containers/FormContainer";
import InputContainer from "../Containers/InputContainer";
import Input from "../Input";
import { LinkStyled, TextContainerStyles, TextStyled } from "./styles";

const FormLogin = ({ text, linkText, to }) => {
	return (
		<FormContainer>
			<InputContainer>
				<Input 
					type="text" 
					placeholder="Digite seu nome de usuário" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					autocomplete="username"
					errorMessage="Por favor, insira um nome válido" 
				/>
				<Input 
					type="password" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					placeholder="Digite sua senha" 
					autocomplete="current-password"
					errorMessage="Por favor, insira uma senha válida" 
				/>
			</InputContainer>
			<TextContainerStyles>
				<TextStyled>{text}</TextStyled>
				<LinkStyled to={to}>{linkText}</LinkStyled>
			</TextContainerStyles>
			
			<Button bgColor={props => props.theme.bgColors.primary} type="submit">Iniciar Sessão</Button>
		</FormContainer>
	);
};

export default FormLogin;