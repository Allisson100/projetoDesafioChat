import FormSection from "../../components/FormSection";
import SideSection from "../../components/SideSection";
import MainContainer from "../../components/Containers/MainContainer";
import Logo from "../../components/Logo";
import { useLocation } from "react-router-dom";

const Login = () => {

	const { pathname } = useLocation();

	console.log(pathname);

	return (
		<MainContainer>
			<Logo 
				right = "none"
				left  = "5%"
			/>
			<FormSection 
				message="Iniciar Sessão"
				path={pathname}
			/>
			<SideSection 
				titleText="bem-vindo de volta!"
				questionText="Não tem uma conta ainda?"
				buttonText="Criar nova conta"
			/>
		</MainContainer>
	);
};

export default Login;