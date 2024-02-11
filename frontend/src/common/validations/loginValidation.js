import * as Yup from "yup";

const loginValidation = () => {
	const validationLoginSchema = Yup.object().shape({
		username: Yup.string()
			.test(
				"no-blank-spaces",
				"O nome de usuário não pode conter espaços em branco",
				value => value === value.trim()
			)
			.required("Campo obrigatório"),
		password: Yup.string()
			.test(
				"no-blank-spaces",
				"A senha não pode conter espaços em branco",
				value => value === value.trim()
			)
			.required("Campo obrigatório")
	});

	return validationLoginSchema;
};

export default loginValidation;