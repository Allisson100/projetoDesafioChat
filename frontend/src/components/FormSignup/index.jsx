import { useFormik } from "formik";
import InputContainer from "../Containers/InputContainer";
import FormText from "../FormText";
import Input from "../Input";
import { FormContainerStyled } from "./styles";
import signupValidation from "../../common/validations/signupValidation";
import ButtonSubmit from "../ButtonSubmit";
import webSocketEvents from "../../services/webSocketEmitEvents";

const FormSignup = () => {

	const formik = useFormik({
		initialValues: {
			username: "",
			repeatUsername: "",
			password: "",
			repeatPassword: "",
		},
		validationSchema: signupValidation(),
		onSubmit: (values, { resetForm }) => {
			webSocketEvents.addUserDb(values);
			resetForm();
		}
	});

	return (
		<FormContainerStyled onSubmit={formik.handleSubmit}>
			<InputContainer>
				<Input
					name="username"
					type="text" 
					placeholder="Digite seu nome de usuário" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					autocomplete="username"
					errorMessage={formik.touched.username && formik.errors.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.username}
				/>
				<Input 
					name="repeatUsername"
					type="text" 
					placeholder="Repita seu nome de usuário" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					autocomplete="username"
					errorMessage={formik.touched.repeatUsername && formik.errors.repeatUsername}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.repeatUsername}
				/>
				<Input
					name="password" 
					type="password" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					placeholder="Digite sua senha" 
					autocomplete="current-password"
					errorMessage={formik.touched.password && formik.errors.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				<Input 
					name="repeatPassword"
					type="password" 
					placeholderColor = {props => props.theme.bgColors.secundary}
					placeholder="Repita sua senha" 
					autocomplete="current-password"
					errorMessage={formik.touched.repeatPassword && formik.errors.repeatPassword}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.repeatPassword}
				/>
			</InputContainer>
			<FormText 
				text = "Já tem uma conta"
				to = "/login"
				linkText= "Iniciar sessão"
			/>			
			<ButtonSubmit 
				bgColor={props => props.theme.bgColors.primary}
			>
				Criar nova conta
			</ButtonSubmit>
		</FormContainerStyled>
	);
};

export default FormSignup;