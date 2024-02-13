import { ContactPageContainerStyled } from "./styles";

const ContactPageContainer = ({ children }) => {
	return (
		<ContactPageContainerStyled>
			{children}
		</ContactPageContainerStyled>
	);
};

export default ContactPageContainer;