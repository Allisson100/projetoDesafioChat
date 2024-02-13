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
import { v4 as uuidv4 } from "uuid";

const ContactPage = () => {

	const userContacts = useSelector(state => state.userContacts);
	const userMessages = useSelector(state => state.userMessages);

	console.log(userContacts);
	console.log(userMessages);

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
							contact.toLowerCase().startsWith(formik.values.searchContact.toLocaleLowerCase()) 
						)
						.map((contact) => (
							<CardContacts
								key={uuidv4()} 
								username={contact}
							/>
						))}
				</AllContactsConatiner>
				
			</ContactInfosContainerStyled>
		</ContactPageContainerStyled>
	);
};

export default ContactPage;