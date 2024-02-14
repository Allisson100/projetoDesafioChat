import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CardChatContainerStyled, UserCardChatContainerStyled } from "./styles";
import { useNavigate } from "react-router";
import webSocketEvents from "../../services/webSocketEmitEvents";
import { useSelector } from "react-redux";
import { GrGroup } from "react-icons/gr";

const CardChat = ({ username, group }) => {

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
				{group ? <GrGroup /> : <FaUserCircle />}
				<h3>{username}</h3>
				<IoClose  onClick={handleDeleteChat}/>
			</UserCardChatContainerStyled>
		</CardChatContainerStyled>
	);
};

export default CardChat;