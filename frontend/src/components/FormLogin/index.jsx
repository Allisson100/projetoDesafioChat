import Button from "../Button";
import Input from "../Input";

const FormLogin = () => {
	return (
		<form>
			<Input 
				type="text" 
				placeholder='Digite seu usuário' 
				autocomplete='username' 
			/>
			<Input 
				type="password" 
				placeholder='Digite sua senha' 
				autocomplete='current-password' 
			/>
			<Button type='submit'>Log In</Button>
		</form>
	);
};

export default FormLogin;