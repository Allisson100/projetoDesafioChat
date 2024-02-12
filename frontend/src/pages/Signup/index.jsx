import { useLocation } from "react-router-dom";
import MainContainer from "../../components/Containers/MainContainer";
import FormSection from "../../components/FormSection";
import SideSection from "../../components/SideSection";
import Logo from "../../components/Logo";

const Signup = () => {

	const { pathname } = useLocation();
	
	return (
		<MainContainer>
			<Logo 
				right = "5%"
				left  = "none"
			/>
			<SideSection 
				titleText="comece uma nova jornada!"
				questionText="Já tem uma conta ainda?"
				buttonText="Iniciar sessão"
				buttonLinkTo="/login"
			/>
			<FormSection 
				message="Criar conta"
				path={pathname}
			/>
		</MainContainer>
	);
};

export default Signup;