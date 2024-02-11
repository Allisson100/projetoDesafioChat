import * as Yup from "yup";

const signupValidation = () => {
	const validationSignupSchema = Yup.object().shape({
		username: Yup.string()
			.test(
				"no-blank-spaces",
				"O nome de usuário não pode conter espaços em branco",
				value => value === value.trim()
			)
			.required("Campo obrigatório"),
		repeatUsername: Yup.string()
			.test(
				"no-blank-spaces",
				"Este campo não pode conter espaços em branco",
				value => value === value.trim()
			)
			.required("Campo obrigatório")
			.oneOf([Yup.ref("username"), null], "Os nomes de usuários devem ser iguais"),
		password: Yup.string()
			.test(
				"no-blank-spaces",
				"A senha não pode conter espaços em branco",
				value => value === value.trim()
			)
			.required("Campo obrigatório"),
		repeatPassword: Yup.string()
			.test(
				"no-blank-spaces",
				"Este campo não pode conter espaços em branco",
				value => value === value.trim()
			)
			.required("Campo obrigatório")
			.oneOf([Yup.ref("password"), null], "As senhas devem ser iguais"),
	});

	return validationSignupSchema;
};

export default signupValidation;