import { MdOutlineExitToApp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { HeaderUserInfosStyled, AllMessagesContainerStyled, UserInfosContainerStyled } from "./styles";
import { removeTokenCookie } from "../../store/reducers/auth";
import { useEffect } from "react";
import { getUsernameLocalStorage } from "../../store/reducers/username";
import { useNavigate } from "react-router-dom";
import CardChat from "../CardChat";
import { FaBookMedical } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const UserInfos = () => {

	const navigate = useNavigate();
	const disptach = useDispatch();
	const username = useSelector(state => state.username);
	const messages = useSelector(state => state.userMessages);

	console.log("hehe",messages);

	const handleExitClick = () => {
		disptach(removeTokenCookie("jwtToken"));
	};

	const handleContactClick = () => {
		navigate("/contact");
	};

	const handleAddContact = () => {
		navigate("/addcontact");
	};

	const handleChats = () => {

		if(messages.length === 0) {
			navigate("/chat/empty");
		} else {
			navigate(`/chat/${messages[0].username}`);
		}
		
		
	};

	useEffect(() => {
		disptach(getUsernameLocalStorage("username"));
	},[]);

	return (
		<UserInfosContainerStyled>
			<HeaderUserInfosStyled>
				<div>
					<FaUserCircle />
					<h2>{username}</h2>
				</div>
				<div><MdOutlineExitToApp onClick={handleExitClick} /></div>
				<div><FaBookMedical onClick={handleAddContact} /></div>
				<div><RiContactsBook2Fill onClick={handleContactClick}/></div>
				<div><GrGroup /></div>
				<div><IoChatboxEllipsesOutline onClick={handleChats}/></div>
			</HeaderUserInfosStyled>
			<AllMessagesContainerStyled>
				{messages.map((message, i) => (
					<CardChat  
						key={i}
						username={message.username}
					/>
				))}
			</AllMessagesContainerStyled>
		</UserInfosContainerStyled>
	);
};

export default UserInfos;