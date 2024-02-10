const Button = ({ color = "blue", type, children }) => {
	return (
		<button style={{ backgroundColor: `${color}` }} type={type}>{children}</button>
	);
};

export default Button;