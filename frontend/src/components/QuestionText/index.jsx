import { QuestionTextContainerStyled } from "./styles";

const QuestionText = ({ children }) => {
	return (
		<QuestionTextContainerStyled>{children}</QuestionTextContainerStyled>
	);
};

export default QuestionText;