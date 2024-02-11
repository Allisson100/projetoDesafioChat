import { FirstTextStyled, LogoContainerStyled, SecondTextStyled } from "./styles.";
import { RiWechat2Fill } from "react-icons/ri";

const Logo = ({ right, left }) => {
	return (
		<LogoContainerStyled
			$rigth={right}
			$left={left}
		>
			<FirstTextStyled>chat</FirstTextStyled>
			<SecondTextStyled>
				<RiWechat2Fill />
				flow
			</SecondTextStyled>
		</LogoContainerStyled>
	);
};

export default Logo;