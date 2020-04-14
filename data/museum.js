const API_MUSEUM = require('../api/api_museum.js');
const Table = require('cli-table3');

module.exports = async (
	data, name, province, city, district, detail
) => {
	if (data && (name || province || city || district)) {
		var response = null
		
		if (name) response = await API_MUSEUM.getName(name)
		if (province) response = await API_MUSEUM.getProvince(province)
		if (city) response = await API_MUSEUM.getCity(city)
		if (district) response = await API_MUSEUM.getDistrict(district)
		
		var result = JSON.parse(response.replace(/^\ufeff/g,"")).data
		
		const table = new Table({ head: [ `#`, `nama`, `alamat` ], style: { head: ['cyan'] }, chars: {} })
		
		if (result) {
			result.map((data, index) => {
				table.push([
					index + 1,
					data.nama,
					data.alamat_jalan + ' ' + data.desa_kelurahan + ' ' + data.kecamatan + ' ' + data.kabupaten_kota + ' ' + data.propinsi,
				])
			})
		}
		
		if (detail) {
			const table = new Table({ head: [ `#`, `nama`, `deskripsi` ], style: { head: ['cyan'] }, chars: {} })
			
			var result = result[detail-1]
			
			if (result) {
				Object.keys(result).map((data, index) => {
					table.push([
					index + 1,
					data,
					result[data]
					])
				})
			}
			
			console.log(table.toString())
		} else {
			console.log(table.toString())
		}
	}
}
