const API_MUSEUM = require('../api/api_museum.js');

module.exports = async (
	table, data, name, profile, province, city, district
) => {
	if (data) {
		var response = null
		
		if (name) response = await API_MUSEUM.getName(name)
		if (profile) response = await API_MUSEUM.getProfile(profile)
		if (province) response = await API_MUSEUM.getProvince(province)
		if (city) response = await API_MUSEUM.getCity(city)
		if (district) response = await API_MUSEUM.getDistrict(district)
		
		var result = JSON.parse(response.replace(/^\ufeff/g,"")).data
		
		result.map((data, index) => {
			table.push([
				index + 1,
				data.nama,
				data.alamat_jalan + ' ' + data.desa_kelurahan + ' ' + data.kecamatan + ' ' + data.kabupaten_kota + ' ' + data.propinsi,
			])
		})
		
		console.log(table.toString())
	}
}
