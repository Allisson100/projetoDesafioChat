import loginValidation from "../../common/validations/loginValidation";
import ButtonSubmit from "../ButtonSubmit";
import InputContainer from "../Containers/InputContainer";
import FormText from "../FormText";
import Input from "../Input";
import { FormContainerStyled } from "./styles";
import { useFormik } from "formik";

const FormLogin = () => {

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: loginValidation(),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			resetForm();
		}
	});

	return (
		<FormContainerStyled onSubmit={formik.handleSubmit}>
			<InputContainer marginBottom>
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
			</InputContainer>
			<FormText 
				text = "Não tem uma conta ainda?"
				to = "/signup"
				linkText= "Inscreva-se"
			/>			
			<ButtonSubmit 
				bgColor={props => props.theme.bgColors.primary}
			>
				Iniciar Sessão
			</ButtonSubmit>
		</FormContainerStyled>
	);
};

export default FormLogin;