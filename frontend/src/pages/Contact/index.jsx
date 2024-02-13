import Input from "../../components/Input";
import { AllContactsConatiner, ButtonContainer, ContactContainerStyled, ContactInfosContainerStyled, ContactPageContainerStyled, IconAndInputContainerStyled, UserContainerStyled } from "./styles";
import { FaUserCircle } from "react-icons/fa"; //userfoto
import { IoSearch } from "react-icons/io5"; //search
import { FaRegMessage } from "react-icons/fa6"; //message
import { useFormik } from "formik";

const ContactPage = () => {

	const formik = useFormik({
		initialValues: {
			searchContact: ""
		},
	});

	return (
		<ContactPageContainerStyled>
			<ContactInfosContainerStyled>
				<IconAndInputContainerStyled>
					<Input 
						name="searchContact"
						type="text"
						placeholder="Procure um contato ..."
						placeholderColor = {props => props.theme.bgColors.quinternary}
						errorMessage={formik.touched.searchContact && formik.errors.searchContact}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.searchContact}
					/>
					<IoSearch />
				</IconAndInputContainerStyled>
                
				<AllContactsConatiner>
					<ContactContainerStyled>
						<UserContainerStyled>
							<FaUserCircle />
							<h3>Allisson</h3>
						</UserContainerStyled>

						<ButtonContainer>
							<h3>Conversar</h3>
							<FaRegMessage />
						</ButtonContainer>
					</ContactContainerStyled>
				</AllContactsConatiner>
				
			</ContactInfosContainerStyled>
		</ContactPageContainerStyled>
	);
};

export default ContactPage;