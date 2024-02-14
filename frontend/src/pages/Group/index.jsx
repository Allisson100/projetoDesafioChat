import { useFormik } from "formik";
import Input from "../../components/Input";
import { ButtonContainer, ContactsContainerStyled, GroupPageContainerStyled, InputContainerStyled } from "./styles";
import GroupContactCard from "../../components/GroupContactCard";
import { useSelector } from "react-redux";

const GroupPage = () => {

	const contacts = useSelector(state => state.userContacts);

	const formik = useFormik({
		initialValues: {
			titleGroup: "",
			descriptionGroup: ""
		},
	});

	const handleCreateNewGroup = () => {
		console.log("Teste");
	};

	return (
		<GroupPageContainerStyled>
			<h2>Criar Grupo</h2>
			<InputContainerStyled>
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