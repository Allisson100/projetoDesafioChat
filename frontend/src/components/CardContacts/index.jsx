import { FaUserCircle } from "react-icons/fa"; //userfoto
import { FaRegMessage } from "react-icons/fa6"; //message
import { ButtonContainer, ContactContainerStyled, UserContainerStyled } from "./styles";
import { IoClose } from "react-icons/io5";

const CardContacts = ({ username }) => {
	return (
		<ContactContainerStyled>
			<UserContainerStyled>
				<FaUserCircle />
				<h3>{username}</h3>
				< IoClose/>
			</UserContainerStyled>

			<ButtonContainer>
				<h3>Conversar</h3>
				<FaRegMessage />
			</ButtonContainer>
		</ContactContainerStyled>
	);
};

export default CardContacts;