import DefaultContainer from "../DefaultContainer";
import FormLogin from "../FormLogin";
import Logo from "../Logo";
import SubtitleH3 from "../SubtitleH3";
import { FormSectionContainerStyled, SetSizeContainerStyled, SubtitlesContainerStyled } from "./styles";

const FormSection = () => {
	return (
		<FormSectionContainerStyled>
			<Logo />
			<SetSizeContainerStyled>
				<DefaultContainer>
					<SubtitlesContainerStyled>
						<SubtitleH3>Iniciar Sessão</SubtitleH3>
						<SubtitleH3>chat flow</SubtitleH3>
					</SubtitlesContainerStyled>
					<FormLogin />
				</DefaultContainer>
			</SetSizeContainerStyled>
		</FormSectionContainerStyled>
	);
};

export default FormSection;