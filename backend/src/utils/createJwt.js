import jwt from "jsonwebtoken";

const createJwt = (payload) => {
	const jwtToken = jwt.sign(payload, "secret", {
		expiresIn: "1h"
	});

	return jwtToken;
};

export default createJwt;