import { FaUserCircle } from "react-icons/fa"; //userfoto
import { ButtonContainerStyled, GroupContactCardContainerStyled, IconContainerStyled } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeOneUSer, addUserToGroup } from "../../store/reducers/group";

const GroupContactCard = ({ username }) => {

	const disptach = useDispatch();
	const usersGroup = useSelector(state => state.group);

	const userAddedGroup = usersGroup.includes(username);

	console.log("Group:", usersGroup);

	const handleAddGroup = () => {
		if(userAddedGroup) {
			disptach(removeOneUSer(username));
		} else {
			disptach(addUserToGroup(username));
		}
	};

	return (
		<GroupContactCardContainerStyled>
			<IconContainerStyled>
				<FaUserCircle />
				<h3>{username}</h3>
			</IconContainerStyled>
			<ButtonContainerStyled 
				onClick={handleAddGroup}
				$userAddedGroup={userAddedGroup}
			>
				{userAddedGroup ? "Remover" : "Adicionar"}
			</ButtonContainerStyled>
		</GroupContactCardContainerStyled>
	);
};

export default GroupContactCard;