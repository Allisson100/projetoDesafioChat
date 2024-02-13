import { ContactInfosContainerStyled } from "./styles";

const ContactInfosContainer = ({ children }) => {
	return (
		<ContactInfosContainerStyled>
			{children}
		</ContactInfosContainerStyled>
	);
};

export default ContactInfosContainer;