import { useFormik } from "formik";
import Input from "../../components/Input";
import { IoSearch } from "react-icons/io5"; //search
import ContactInfosContainer from "../../components/Containers/ContactInfosContainer";
import ContactPageContainer from "../../components/Containers/ContactPageContainer";
import { IconAndInputContainerStyled } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { startLoading } from "../../store/reducers/loading";
import webSocketEvents from "../../services/webSocketEmitEvents";

const AddContact = () => {

	const dispatch = useDispatch();
	const loading = useSelector(state => state.loading);
	const userFound = useSelector(state => state.addUSer);
	console.log(loading, userFound);

	const handleSearch = () => {
		dispatch(startLoading());
		webSocketEvents.findUserDb(formik.values.findUser);
		formik.resetForm();
	};

	const formik = useFormik({
		initialValues: {
			findUser: ""
		},
	});

	return (

		<ContactPageContainer>
			<ContactInfosContainer>
				<IconAndInputContainerStyled>
					<Input 
						name="findUser"
						type="text"
						placeholder="Digite o nome do contato para adicionar"
						placeholderColor = {props => props.theme.bgColors.quinternary}
						errorMessage={formik.touched.findUser && formik.errors.findUser}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.findUser}
					/>
					<IoSearch 
						onClick={handleSearch}
					/>
				</IconAndInputContainerStyled>
				
			</ContactInfosContainer>
		</ContactPageContainer>
		
	);
};

export default AddContact;