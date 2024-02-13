import { useDispatch } from "react-redux";
import { removeTokenCookie } from "../../store/reducers/auth";

const Home = () => {

	const disptach = useDispatch();

	const handleClick = () => {
		disptach(removeTokenCookie("jwtToken"));
	};

	return (
		<>
			<h1>HOME</h1>
			<button onClick={handleClick}>Logout</button>
		</>
	);
};

export default Home;