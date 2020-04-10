const axios = require('axios');
const constant = require('./constant');

async function getProfile(id)
{
	const url = `${constant.BASE_ENDPOINT}/profilGet?museum_id=` + id
	const response = await axios.get(url)
	
	return response.data
}

async function getProvince(id)
{
	const url = `${constant.BASE_ENDPOINT}/searchGET?kode_prop=` + id
	const response = await axios.get(url)
	
	return response.data
}

async function getCity(id)
{
	const url = `${constant.BASE_ENDPOINT}/searchGET?kode_kab_kota=` + id
	const response = await axios.get(url)
	
	return response.data
}

async function getDistrict(id)
{
	const url = `${constant.BASE_ENDPOINT}/searchGET?kode_kec=` + id
	const response = await axios.get(url)
	
	return response.data
}

async function getName(name)
{
	const url = `${constant.BASE_ENDPOINT}/searchGET?nama=` + name
	const response = await axios.get(url)
	
	return response.data
}

async function getLatitude(latitude, longitude)
{
	const url = `${constant.BASE_ENDPOINT}/searchGET?lintang=` + latitude + `&bujur=` + longitude
	const response = await axios.get(url)
	
	return response.data
}

module.exports = {
	getProfile,
	getProvince,
	getCity,
	getDistrict,
	getName,
	getLatitude
}
