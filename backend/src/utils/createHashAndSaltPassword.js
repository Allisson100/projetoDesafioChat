import { randomBytes, scryptSync } from "crypto";

const createHashAndSaltPassword = (password) => {

	const saltPassword = randomBytes(16).toString("hex");

	const hashPassword = scryptSync(password, saltPassword, 64).toString("hex");

	return { hashPassword, saltPassword };
};

export default createHashAndSaltPassword;