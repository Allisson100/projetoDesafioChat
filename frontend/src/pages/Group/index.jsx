import { useFormik } from "formik";
import Input from "../../components/Input";
import { ButtonContainer, ContactsContainerStyled, GroupPageContainerStyled, InputContainerStyled } from "./styles";
import GroupContactCard from "../../components/GroupContactCard";
import { useSelector, useDispatch } from "react-redux";
import newGroupValidation from "../../common/validations/newGroupValidation";
import { removeAllUsers } from "../../store/reducers/group";
import webSocketEvents from "../../services/webSocketEmitEvents";

const GroupPage = () => {

	const disptach = useDispatch();
	const contacts = useSelector(state => state.userContacts);
	const groupUsers = useSelector(state => state.group);
	const userAuth = useSelector(state => state.username);

	const handleCreateNewGroup = () => {
		formik.submitForm();
	};

	const formik = useFormik({
		initialValues: {
			titleGroup: "",
			descriptionGroup: ""
		},
		validationSchema: newGroupValidation(),
		onSubmit: (values, { resetForm }) => {
			webSocketEvents.createNewGroup(userAuth, values.titleGroup, values.descriptionGroup, groupUsers);
			resetForm();
			disptach(removeAllUsers());
		}
	});

	

	return (
		<GroupPageContainerStyled>
			<h2>Criar Grupo</h2>
			<InputContainerStyled onSubmit={formik.handleSubmit}>
				<Input
					name="titleGroup"
					type="text"
					placeholder="Nome do grupo"
					placeholderColor = {props => props.theme.bgColors.quinternary}
					errorMessage={formik.touched.titleGroup && formik.errors.titleGroup}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.titleGroup}
				/>
				<Input
					name="descriptionGroup"
					type="text"
					placeholder="Descrição do grupo"
					placeholderColor = {props => props.theme.bgColors.quinternary}
					errorMessage={formik.touched.descriptionGroup && formik.errors.descriptionGroup}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.descriptionGroup}
				/>
				<h2>Adicionar Membros</h2>
				<ContactsContainerStyled>
					{contacts.map((contact) => (
						<GroupContactCard
							key={contact._id}
							username={contact.contactName}
						/>
					))}
				</ContactsContainerStyled>
			</InputContainerStyled>
			<ButtonContainer onClick={handleCreateNewGroup}>Criar grupo</ButtonContainer>
		</GroupPageContainerStyled>
	);
};

export default GroupPage;