import { useFormik } from "formik";
import { AllTextMessagesContainerStyled, ChatContainerStyled, EmptyContainerStyled } from "./styles";
import Input from "../../components/Input";
import { useSelector } from "react-redux";
import TextMessageCard from "../../components/TextMessageCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import webSocketEvents from "../../services/webSocketEmitEvents";
import EmptyList from "../../components/EmptyList";

const ChatPage = () => {
	const [ getMessages , setGetMessages ] = useState([]);

	const messages = useSelector(state => state.userMessages);
	const userAuth = useSelector(state => state.username);

	console.log("oi",getMessages);

	const { username } = useParams();

	useEffect(() => {
		setGetMessages(() => {
			const newMessages = messages.filter((message) => message.username === username);

			return newMessages[0]?.textMessages;
		});
	},[messages, username]);

	const handleSendText = () => {
		webSocketEvents.sendMessage(formik.values.sendMessage, username, userAuth);
		formik.resetForm();
	};

	const handleKeyPress = (event) => {
		if(event.key === "Enter" && formik.values.sendMessage !== "") {
			handleSendText();
		}
	};

	const formik = useFormik({
		initialValues: {
			sendMessage: ""
		},
	});

	return (		
		<ChatContainerStyled>
			<AllTextMessagesContainerStyled>
				{
					getMessages?.map((message) => (
						<TextMessageCard 
							key={message._id}
							textMessage={message.text}
							userSentMessage={message.whoSent}
							whoSent={message.whoSent}
							createdAt={message.createdAt}
						/>
					))
				}
				{username === "empty" &&
					<EmptyContainerStyled>
						<EmptyList>
							Nenhuma conversa criada ainda!
						</EmptyList>
					</EmptyContainerStyled>
				}
			</AllTextMessagesContainerStyled>
			<div>
				<Input
					noBorderRadios 
					name="sendMessage"
					type="text"
					placeholder="Mensagem"
					placeholderColor = {props => props.theme.bgColors.quinternary}
					errorMessage={formik.touched.sendMessage && formik.errors.sendMessage}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.sendMessage}
					onKeyPress={handleKeyPress}
				/>
			</div>
			
		</ChatContainerStyled>
			
	);
};

export default ChatPage;