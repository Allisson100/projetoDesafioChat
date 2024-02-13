import { MdOutlineExitToApp } from "react-icons/md";//sair
import { FaUserCircle } from "react-icons/fa"; //userfoto
import { RiContactsBook2Fill } from "react-icons/ri"; // lista contatos
import { BiMessageRoundedAdd } from "react-icons/bi"; // começar conversa
import { GrGroup } from "react-icons/gr"; //group
import { useDispatch, useSelector } from "react-redux";
import { HeaderUserInfosStyled, UserInfosContainerStyled } from "./styles";
import { removeTokenCookie } from "../../store/reducers/auth";
import { useEffect } from "react";
import { getUsernameLocalStorage } from "../../store/reducers/username";
import { useNavigate } from "react-router-dom";

const UserInfos = () => {

	const navigate = useNavigate();
	const disptach = useDispatch();
	const username = useSelector(state => state.username);

	const handleExitClick = () => {
		disptach(removeTokenCookie("jwtToken"));
	};

	const handleContactClick = () => {
		navigate("/contact");
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
				<div><BiMessageRoundedAdd /></div>
				<div><RiContactsBook2Fill onClick={handleContactClick}/></div>
				<div><GrGroup /></div>
			</HeaderUserInfosStyled>
		</UserInfosContainerStyled>
	);
};

export default UserInfos;