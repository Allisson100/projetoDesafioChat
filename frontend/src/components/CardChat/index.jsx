import { FaUserCircle } from "react-icons/fa"; //userfoto
import { IoClose } from "react-icons/io5";
import { CardChatContainerStyled, UserCardChatContainerStyled } from "./styles";
import { useNavigate } from "react-router";
import webSocketEvents from "../../services/webSocketEmitEvents";
import { useSelector } from "react-redux";

const CardChat = ({ username }) => {

	const navigate = useNavigate();
	const userAuth = useSelector(state => state.username);

	const handleDeleteChat = () => {
		webSocketEvents.deleteMessage(username, userAuth);
	};

	const handleGetChatMessages = () => {
		navigate(`/chat/${username}`);
	};

	return (
		<CardChatContainerStyled onClick={handleGetChatMessages}>
			<UserCardChatContainerStyled>
				<FaUserCircle />
				<h3>{username}</h3>
				<IoClose  onClick={handleDeleteChat}/>
			</UserCardChatContainerStyled>
		</CardChatContainerStyled>
	);
};

export default CardChat;