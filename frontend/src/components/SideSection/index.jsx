import Button from "../Button";
import DefaultContainer from "../Containers/DefaultContainer";
import QuestionText from "../QuestionText";
import Title from "../Title/Index";
import { ButtonAndQuestionContainerStyled, SideSectionContainerStyled } from "./styles";

const SideSection = ({ titleText, questionText, buttonText }) => {
	return (
		<SideSectionContainerStyled>
			<DefaultContainer>
				<Title>{titleText}</Title>
				<ButtonAndQuestionContainerStyled>
					<QuestionText>{questionText}</QuestionText>
					<Button
						bgColor={props => props.theme.bgColors.quinternary}
					>
						{buttonText}
					</Button>
				</ButtonAndQuestionContainerStyled>
			</DefaultContainer>
		</SideSectionContainerStyled>
	);
};

export default SideSection;