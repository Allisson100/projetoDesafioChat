const localStorageMethods = {
	getItem: (key) => {
		const itemLocalStorage = localStorage.getItem(key);
		const itemParse = JSON.parse(itemLocalStorage);
		return itemParse;
	},

	setItem: (key, item) => {
		localStorage.setItem(key, JSON.stringify(item));
	},

	removeItem: (key) => {
		localStorage.removeItem(key);
	}
};

export default localStorageMethods;