import { FormContainerStyled } from "./styles";

const FormContainer = ({ children }) => {
	return (
		<FormContainerStyled>
			{children}
		</FormContainerStyled>
	);
};

export default FormContainer;