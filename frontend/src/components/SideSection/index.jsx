import Button from "../Button";
import DefaultContainer from "../DefaultContainer";
import QuestionText from "../QuestionText";
import Title from "../Title/Index";
import { ButtonAndQuestionContainerStyled, SideSectionContainerStyled } from "./styles";

const SideSection = () => {
	return (
		<SideSectionContainerStyled>
			<DefaultContainer>
				<Title>bem-vindo de volta!</Title>
				<ButtonAndQuestionContainerStyled>
					<QuestionText>Não tem uma conta ainda?</QuestionText>
					<Button bgColor={props => props.theme.bgColors.quinternary}>Criar nova conta</Button>
				</ButtonAndQuestionContainerStyled>
			</DefaultContainer>
		</SideSectionContainerStyled>
	);
};

export default SideSection;