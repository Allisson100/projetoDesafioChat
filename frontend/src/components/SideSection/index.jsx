import Button from "../Button";
import DefaultContainer from "../Containers/DefaultContainer";
import QuestionText from "../QuestionText";
import Title from "../Title/Index";
import { ButtonAndQuestionContainerStyled, SideSectionContainerStyled } from "./styles";

const SideSection = ({ titleText, questionText, buttonText, buttonLinkTo }) => {
	return (
		<SideSectionContainerStyled>
			<DefaultContainer>
				<Title>{titleText}</Title>
				<ButtonAndQuestionContainerStyled>
					<QuestionText>{questionText}</QuestionText>
<<<<<<< HEAD
					<Button
						bgColor={props => props.theme.bgColors.quinternary}
					>
						{buttonText}
					</Button>
=======
<<<<<<< Updated upstream
					<Button bgColor={props => props.theme.bgColors.quinternary}>{buttonText}</Button>
=======
					<Button
						bgColor={props => props.theme.bgColors.quinternary}
						to={buttonLinkTo}
					>
						{buttonText}
					</Button>
>>>>>>> Stashed changes
>>>>>>> front_Refatoracao
				</ButtonAndQuestionContainerStyled>
			</DefaultContainer>
		</SideSectionContainerStyled>
	);
};

export default SideSection;