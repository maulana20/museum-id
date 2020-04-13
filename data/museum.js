const API_MUSEUM = require('../api/api_museum.js');

module.exports = async (
	table, data, name, profile, province, city, district, detail
) => {
	if (data && (name || profile || province || city || district)) {
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
		
		if ((name || province || city || district) && detail) {
			// nb : buat table sendiri untuk detail
			const Table = require('cli-table3');
			const table = new Table({ head: [ `#`, `nama`, `deskripsi` ], style: { head: ['cyan'] }, chars: {} })
			
			response = await API_MUSEUM.getProfile(result[detail-1].museum_id)
			result = JSON.parse(response.replace(/^\ufeff/g,"")).data[0]
			
			Object.keys(result).map((data, index) => {
				table.push([
				index + 1,
				data,
				result[data]
				])
			})
			
			console.log(table.toString())
		} else {
			console.log(table.toString())
		}
	}
}
