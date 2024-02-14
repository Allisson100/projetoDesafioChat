import { useSelector } from "react-redux";
import { TextMessageCardContainer } from "./styles";

const TextMessageCard = ({ textMessage, userSentMessage }) => {

	const userAuth = useSelector(state => state.username);

	const changeAlignAndColor = userSentMessage === userAuth;

	console.log(changeAlignAndColor);

	return (
		<TextMessageCardContainer
			$changeAlignAndColor={changeAlignAndColor}
		>
			<p>{textMessage}</p>
		</TextMessageCardContainer>
	);
};

export default TextMessageCard;