const API_MUSEUM = require('../api/api_museum.js');

module.exports = async (
	table, data, name
) => {
	if (data) {
		if (name) {
			var response = await API_MUSEUM.getName(name);
			var result = JSON.parse(response.replace(/^\ufeff/g,"")).data
			
			result.map((data, index) => {
				table.push([
					index + 1,
					data.nama,
					data.alamat_jalan,
					data.desa_kelurahan,
					data.kecamatan,
					data.kabupaten_kota,
					data.propinsi,
				])
			})
			
			console.log(table.toString())
		}
	}
}
