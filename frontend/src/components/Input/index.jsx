const Input = ({ type, placeholder, autocomplete }) => {
	return (
		<input 
			type={type} 
			placeholder={placeholder} 
			autoComplete={autocomplete} 
		/>
	);
};

export default Input;