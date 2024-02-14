import { FaPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa"; //userfoto
import { ButtonContainerStyled, ContactContainerStyled, UserContainerStyled } from "./styles";
import webSocketEvents from "../../services/webSocketEmitEvents";
import { useSelector } from "react-redux";

const CardAddContact = ({ username }) => {

	const userAuth = useSelector(state => state.username);

	const handleAddUserToContacts = () => {
		webSocketEvents.addContactDb({userToAdd: username, userAuth: userAuth});
	};

	return (
		<ContactContainerStyled>
			<UserContainerStyled>
				<FaUserCircle />
				<h3>{username}</h3>
			</UserContainerStyled>

			<ButtonContainerStyled onClick={handleAddUserToContacts}>
				<h3>Adicionar</h3>
				<FaPlus />
			</ButtonContainerStyled>
		</ContactContainerStyled>
	);
};

export default CardAddContact;