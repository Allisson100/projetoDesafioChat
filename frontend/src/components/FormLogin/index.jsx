<<<<<<< Updated upstream
import Button from "../Button";
<<<<<<< HEAD
=======
import FormContainer from "../Containers/FormContainer";
=======
import ButtonSubmit from "../ButtonSubmit";
>>>>>>> Stashed changes
>>>>>>> front_Refatoracao
import InputContainer from "../Containers/InputContainer";
import FormText from "../FormText";
import Input from "../Input";
import { FormContainerStyled } from "./styles";

const FormLogin = () => {

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("Form do Login");
	};

	return (
<<<<<<< HEAD
		<FormContainerStyled onSubmit={handleSubmit}>
=======
<<<<<<< Updated upstream
		<FormContainer>
>>>>>>> front_Refatoracao
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
<<<<<<< HEAD
			<FormText 
				text = "Não tem uma conta ainda?"
				to = "/signup"
				linkText= "Inscreva-se"
			/>			
			<Button bgColor={props => props.theme.bgColors.primary} type="submit">Iniciar Sessão</Button>
		</FormContainerStyled>
=======
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
>>>>>>> front_Refatoracao
	);
};

export default FormLogin;