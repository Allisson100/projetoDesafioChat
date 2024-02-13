const getToken = (key) => {
	const token = document.cookie
		.split("; ")
		.find((cookie) => cookie.startsWith(`${key}=`))
		?.split("=")[1];
    
	return token;
};

export default getToken;