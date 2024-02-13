import { useDispatch } from "react-redux";
import { removeTokenCookie } from "../../store/reducers/auth";

const ChatPage = () => {

	const disptach = useDispatch();

	const handleClick = () => {
		disptach(removeTokenCookie("jwtToken"));
	};

	return (
		<>
			<h1>ChatPage</h1>
			<button onClick={handleClick}>Logout</button>
		</>
	);
};

export default ChatPage;