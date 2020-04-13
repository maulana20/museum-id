const API_REGION = require('../api/api_region.js');
const Table = require('cli-table3');

module.exports = async (
	region, code
) => {
	if (region) {
		var response = await API_REGION.getRegion(code)
		var result = JSON.parse(response.replace(/^\ufeff/g,"")).data
		
		const table = new Table({ head: [ `#`, `kode wilayah`, `kode induk` , `nama wilayah` ], style: { head: ['cyan'] }, chars: {} })
		
		if (result) {
			result.map((data, index) => {
				table.push([
					index + 1,
					data.kode_wilayah.trim(),
					data.mst_kode_wilayah.trim(),
					data.nama
				])
			})
		}
		console.log(table.toString())
	}
}
