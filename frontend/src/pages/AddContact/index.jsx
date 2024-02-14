import { useFormik } from "formik";
import Input from "../../components/Input";
import { IoSearch } from "react-icons/io5"; //search
import ContactInfosContainer from "../../components/Containers/ContactInfosContainer";
import ContactPageContainer from "../../components/Containers/ContactPageContainer";
import { IconAndInputContainerStyled } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { startLoading } from "../../store/reducers/loading";
import { removeUser } from "../../store/reducers/addUser";
import webSocketEvents from "../../services/webSocketEmitEvents";
import LoadingAnimation from "../../components/LoadingAnimation";
import CardAddContact from "../../components/CardAddContact";
import EmptyList from "../../components/EmptyList";

const AddContact = () => {

	const dispatch = useDispatch();
	const loading = useSelector(state => state.loading);
	const userFound = useSelector(state => state.addUSer);
	console.log(loading, userFound);

	const handleSearch = () => {
		dispatch(removeUser());
		dispatch(startLoading());
		webSocketEvents.findUserDb(formik.values.findUser);
		formik.resetForm();
	};

	const handleKeyPress = (event) => {
		if(event.key === "Enter") {
			handleSearch();
		}
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
						onKeyPress={handleKeyPress}
					/>
					<IoSearch 
						onClick={handleSearch}
					/>
				</IconAndInputContainerStyled>
				{userFound === "" &&
					<EmptyList>
						Adicione algúem para conversar!😀
					</EmptyList>
				}
				{loading &&
					<LoadingAnimation />
				}
				{userFound &&
					<CardAddContact 
						username={userFound}
					/>
				}
			</ContactInfosContainer>
		</ContactPageContainer>
		
	);
};

export default AddContact;