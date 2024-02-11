import Button from "../Button";
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
					type="password" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					placeholder="Digite sua senha" 
					autocomplete="current-password"
					errorMessage="Por favor, insira uma senha válida" 
				/>
			</InputContainer>
			<FormText 
				text = "Não tem uma conta ainda?"
				to = "/signup"
				linkText= "Inscreva-se"
			/>			
			<Button bgColor={props => props.theme.bgColors.primary} type="submit">Iniciar Sessão</Button>
		</FormContainerStyled>
	);
};

export default FormLogin;