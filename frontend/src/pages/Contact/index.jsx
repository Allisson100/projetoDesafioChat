import Input from "../../components/Input";
import { 
	AllContactsConatiner,
	ContactInfosContainerStyled, 
	ContactPageContainerStyled, 
	IconAndInputContainerStyled
} from "./styles";
import { IoSearch } from "react-icons/io5"; //search
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import CardContacts from "../../components/CardContacts";

const ContactPage = () => {

	const userContacts = useSelector(state => state.userContacts);
	console.log(userContacts);

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
					
					{userContacts
						.filter((contact) => 
							contact.contactName.toLowerCase().startsWith(formik.values.searchContact.toLowerCase()) 
						)
						.map((contact) => (
							<CardContacts
								key={contact._id} 
								id={contact._id}
								username={contact.contactName}
							/>
						))}
				</AllContactsConatiner>
				
			</ContactInfosContainerStyled>
		</ContactPageContainerStyled>
	);
};

export default ContactPage;