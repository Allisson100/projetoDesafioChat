<<<<<<< Updated upstream
import Button from "../Button";
import FormContainer from "../Containers/FormContainer";
=======
import ButtonSubmit from "../ButtonSubmit";
>>>>>>> Stashed changes
import InputContainer from "../Containers/InputContainer";
import Input from "../Input";
import { LinkStyled, TextContainerStyles, TextStyled } from "./styles";

const FormLogin = ({ text, linkText, to }) => {
	return (
<<<<<<< Updated upstream
		<FormContainer>
			<InputContainer>
=======
		<FormContainerStyled onSubmit={handleSubmit}>
			<InputContainer marginBottom>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
			<TextContainerStyles>
				<TextStyled>{text}</TextStyled>
				<LinkStyled to={to}>{linkText}</LinkStyled>
			</TextContainerStyles>
			
			<Button bgColor={props => props.theme.bgColors.primary} type="submit">Iniciar Sessão</Button>
		</FormContainer>
=======
			<FormText 
				text = "Não tem uma conta ainda?"
				to = "/signup"
				linkText= "Inscreva-se"
			/>			
			<ButtonSubmit 
				bgColor={props => props.theme.bgColors.primary}
			>
				Iniciar Sessão
			</ButtonSubmit>
		</FormContainerStyled>
>>>>>>> Stashed changes
	);
};

export default FormLogin;