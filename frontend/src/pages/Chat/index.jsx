import { useFormik } from "formik";
import { AllTextMessagesContainerStyled, ChatContainerStyled } from "./styles";
import Input from "../../components/Input";
import { useSelector } from "react-redux";
import TextMessageCard from "../../components/TextMessageCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ChatPage = () => {
	const [ getMessages , setGetMessages ] = useState([]);

	const messages = useSelector(state => state.userMessages);
	const { username } = useParams();

	useEffect(() => {
		setGetMessages(() => {
			const newMessages = messages.filter((message) => message.username === username);

			return newMessages[0].textMessages;
		});
	},[messages, username]);

	const handleSendText = () => {
		console.log(formik.values.sendMessage);
		
		formik.resetForm();
	};

	const handleKeyPress = (event) => {
		if(event.key === "Enter") {
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
					getMessages.map((message, i) => (
						<TextMessageCard 
							key={i}
							textMessage={message.text}
							userSentMessage={message.whoSent}
						/>
					))
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