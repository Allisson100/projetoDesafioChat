import DefaultContainer from "../Containers/DefaultContainer";
import FormLogin from "../FormLogin";
import FormSignup from "../FormSignup";
import SubtitleH3 from "../SubtitleH3";
import { FormSectionContainerStyled, SetSizeStyled, SetPositionSubtitlesStyled } from "./styles";

const FormSection = ({ message, path }) => {

	return (
		<FormSectionContainerStyled>
			<SetSizeStyled>
				<DefaultContainer>
					<SetPositionSubtitlesStyled>
						<SubtitleH3>{message}</SubtitleH3>
						<SubtitleH3>chat flow</SubtitleH3>
					</SetPositionSubtitlesStyled>
					{path === "/login" && <FormLogin />}
					{path === "/signup" && <FormSignup />}
				</DefaultContainer>
			</SetSizeStyled>
		</FormSectionContainerStyled>
	);
};

export default FormSection;