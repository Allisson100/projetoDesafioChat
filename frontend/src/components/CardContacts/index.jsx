import { FaUserCircle } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { ButtonContainerStyled, ContactContainerStyled, UserContainerStyled } from "./styles";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import webSocketEvents from "../../services/webSocketEmitEvents";
import { useNavigate } from "react-router";

const CardContacts = ({ username, id }) => {

	const navigate = useNavigate();

	const userAuth = useSelector(state => state.username);

	const handleDeleteContact = () => {
		webSocketEvents.deleteContactsDb({id, username: userAuth});
	};

	const handleMessage = () => {
		navigate(`/chat/${username}`);
	};

	return (
		<ContactContainerStyled>
			<UserContainerStyled>
				<FaUserCircle />
				<h3>{username}</h3>
				<IoClose  onClick={handleDeleteContact}/>
			</UserContainerStyled>

			<ButtonContainerStyled onClick={handleMessage}>
				<h3>Conversar</h3>
				<FaRegMessage />
			</ButtonContainerStyled>
		</ContactContainerStyled>
	);
};

export default CardContacts;