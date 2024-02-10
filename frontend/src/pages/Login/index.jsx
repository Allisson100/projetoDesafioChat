import FormSection from "../../components/FormSection";
import SideSection from "../../components/SideSection";
import { LoginContainerStyled } from "./styles";

const Login = () => {
	return (
		<LoginContainerStyled>
			<FormSection />
			<SideSection />
		</LoginContainerStyled>
	);
};

export default Login;