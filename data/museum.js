const API_MUSEUM = require('../api/api_museum.js');

module.exports = async (
	data, name
) => {
	if (data) {
		if (name) {
			const data = await API_MUSEUM.getName(name);
			console.log(data);
		}
	}
}
