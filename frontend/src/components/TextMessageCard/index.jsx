import { useSelector } from "react-redux";
import { TextMessageCardContainer } from "./styles";
import changeDateAndTime from "../../utils/changeDateAndTime";

const TextMessageCard = ({ textMessage, userSentMessage, whoSent, createdAt }) => {

	const newTime = changeDateAndTime(createdAt);

	const userAuth = useSelector(state => state.username);

	const changeAlignAndColor = userSentMessage === userAuth;

	return (
		<TextMessageCardContainer
			$changeAlignAndColor={changeAlignAndColor}
		>
			<span>{whoSent}</span>
			<p>{textMessage}</p>
			<span>{newTime}</span>
		</TextMessageCardContainer>
	);
};

export default TextMessageCard;