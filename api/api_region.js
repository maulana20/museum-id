const axios = require('axios');
const constant = require('./constant');

async function getRegion(id)
{
	const url = `${constant.REGION_ENDPOINT}/wilayahGET` + ( [null, undefined, '', 0].includes(id) == true ? `` : `?mst_kode_wilayah=` + id )
	const response = await axios.get(url)
	
	return response.data
}

module.exports = {
	getRegion
}
