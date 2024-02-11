import ButtonSubmit from "../ButtonSubmit";
import InputContainer from "../Containers/InputContainer";
import FormText from "../FormText";
import Input from "../Input";
import { FormContainerStyled } from "./styles";

const FormSignup = () => {

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("Form do Signup");
	};

	return (
		<FormContainerStyled onSubmit={handleSubmit}>
			<InputContainer>
				<Input 
					type="text" 
					placeholder="Digite seu nome de usuário" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					autocomplete="username"
					errorMessage="Por favor, insira um nome válido" 
				/>
				<Input 
					type="text" 
					placeholder="Repita seu nome de usuário" 
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
				<Input 
					type="password" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					placeholder="Repita sua senha" 
					autocomplete="current-password"
					errorMessage="Por favor, insira uma senha válida" 
				/>
			</InputContainer>
			<FormText 
				text = "Já tem uma conta?"
				to = "/login"
				linkText= "Iniciar sessão"
			/>			
			<ButtonSubmit 
				bgColor={props => props.theme.bgColors.primary}
			>
				Criar nova conta
			</ButtonSubmit>
		</FormContainerStyled>
	);
};

export default FormSignup;