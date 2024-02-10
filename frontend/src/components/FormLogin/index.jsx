import Button from "../Button";
import Input from "../Input";
import { FormContainerStyled, InputContainerStyled, TextStyled } from "./styles";

const FormLogin = () => {
	return (
		<FormContainerStyled>
			<InputContainerStyled>
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
			</InputContainerStyled>
			<TextStyled>Não tem uma conta ainda?<a href="/"> Inscreva-se</a></TextStyled>
			<Button bgColor={props => props.theme.bgColors.primary} type="submit">Iniciar Sessão</Button>
		</FormContainerStyled>
	);
};

export default FormLogin;