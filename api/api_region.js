import axios from 'axios';

const constant = require('./constant');

async function getAllProvince()
{
	const url = `${constant.REGION_ENDPOINT}/wilayahGET`
	const response = await axios.get(url)
	
	return response.data
}

async function getProvince(id)
{
	const url = `${constant.REGION_ENDPOINT}/wilayahGET?mst_kode_wilayah=` + id
	const response = await axios.get(url)
	
	return response.data
}

async function getCity(id)
{
	const url = `${constant.REGION_ENDPOINT}/wilayahGET?mst_kode_wilayah=` + id
	const response = await axios.get(url)
	
	return response.data
}

module.exports = {
	getAllProvince,
	getProvince,
	getCity
}
