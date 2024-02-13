import { scryptSync, timingSafeEqual } from "crypto";

const compareHashs = (password, user) => {

	const testHash  = scryptSync(password, user.saltPassword, 64);

	// eslint-disable-next-line
	const realHash = Buffer.from(user.hashPassword, "hex");

	const auth = timingSafeEqual(testHash, realHash);

	return auth;

};

export default compareHashs;