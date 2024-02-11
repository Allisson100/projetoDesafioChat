import DefaultContainer from "../Containers/DefaultContainer";
import FormLogin from "../FormLogin";
import Logo from "../Logo";
import SubtitleH3 from "../SubtitleH3";
import { FormSectionContainerStyled, SetSizeStyled, SetPositionSubtitlesStyled } from "./styles";

const FormSection = ({ message, path }) => {
	return (
		<FormSectionContainerStyled>
			<Logo />
			<SetSizeStyled>
				<DefaultContainer>
					<SetPositionSubtitlesStyled>
						<SubtitleH3>{message}</SubtitleH3>
						<SubtitleH3>chat flow</SubtitleH3>
					</SetPositionSubtitlesStyled>
					{path === "/login" && 
						<FormLogin 
							text="Não tem uma conta ainda?"
							linkText="Inscreva-se"
							to="/signup"
						/>
					}
					{path === "/signup" && <div>SIGNUP</div>}
				</DefaultContainer>
			</SetSizeStyled>
		</FormSectionContainerStyled>
	);
};

export default FormSection;