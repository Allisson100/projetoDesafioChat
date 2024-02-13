import { FaUserCircle } from "react-icons/fa"; //userfoto
import { FaRegMessage } from "react-icons/fa6"; //message
import { ButtonContainer, ContactContainerStyled, UserContainerStyled } from "./styles";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import webSocketEvents from "../../services/webSocketEmitEvents";

const CardContacts = ({ username, id }) => {

	const userAuth = useSelector(state => state.username);

	const handleDeleteContact = () => {
		webSocketEvents.deleteContactsDb({id, username: userAuth});
	};

	return (
		<ContactContainerStyled>
			<UserContainerStyled>
				<FaUserCircle />
				<h3>{username}</h3>
				<IoClose  onClick={handleDeleteContact}/>
			</UserContainerStyled>

			<ButtonContainer>
				<h3>Conversar</h3>
				<FaRegMessage />
			</ButtonContainer>
		</ContactContainerStyled>
	);
};

export default CardContacts;