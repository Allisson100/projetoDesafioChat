const changeDateAndTime = (data) => {
	const createdAtUTC = new Date(data);

	const day = String(createdAtUTC.getDate()).padStart(2, "0");
	const month = String(createdAtUTC.getMonth() + 1).padStart(2, "0");
	const year = createdAtUTC.getFullYear();
	const hours = String(createdAtUTC.getHours()).padStart(2, "0");
	const minutes = String(createdAtUTC.getMinutes()).padStart(2, "0");
    
	const formattedDate = `${day}/${month}/${year} - ${hours}:${minutes}`;

	return formattedDate;
};

export default changeDateAndTime;