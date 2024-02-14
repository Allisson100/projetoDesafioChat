import * as Yup from "yup";

const newGroupValidation = () => {
	const validationNewGroupSchema = Yup.object().shape({
		titleGroup: Yup.string()
			.test(
				"no-blank-spaces",
				"Preencha o título.",
				value => value.trim().length > 0
			)
			.required("Campo obrigatório"),
		descriptionGroup: Yup.string()
			.test(
				"no-blank-spaces",
				"Preencha a descrição.",
				value => value.trim().length > 0
			)
			.required("Campo obrigatório")
	});

	return validationNewGroupSchema;
};

export default newGroupValidation;