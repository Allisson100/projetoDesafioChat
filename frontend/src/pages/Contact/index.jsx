import Input from "../../components/Input";
import { AllContactsContainer,} from "./styles";
import { IoSearch } from "react-icons/io5"; //search
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import CardContacts from "../../components/CardContacts";
import IconAndInputContainer from "../../components/Containers/IconAndInputContainer";
import ContactInfosContainer from "../../components/Containers/ContactInfosContainer";
import ContactPageContainer from "../../components/Containers/ContactPageContainer";

const ContactPage = () => {

	const userContacts = useSelector(state => state.userContacts);
	console.log(userContacts);

	const formik = useFormik({
		initialValues: {
			searchContact: ""
		},
	});

	return (
		<ContactPageContainer>
			<ContactInfosContainer>
				<IconAndInputContainer>
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
				</IconAndInputContainer>
                
				<AllContactsContainer>
					
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
				</AllContactsContainer>
				
			</ContactInfosContainer>
		</ContactPageContainer>
	);
};

export default ContactPage;