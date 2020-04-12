const meow = require('meow');

module.exports = meow(`
	Usage
		$ museum <command> [--option]

	Commands
		data                      get data museum
		region                    get data region

	Options
		-n,    --name             search by name
		-prof, --profile          search by museum id
		-prov, --province         search by code province
		-city, --city             search by code city
		-dist, --district         search by code district

	Examples
		$ museum data --name "wayang"
		data museum wayang
		
		$ museum data --profile "4A33CF6F-A284-4E42-830B-E7DC755614CD"
		data museum profile
		
		$ museum data --province "010000"
		data museum by code province
		
		$ museum data --city "016200"
		data museum by code city
		
		$ museum data --district "016001"
		data museum by code district
`, {
	alias: {
		name: {
			type: 'string',
			default: '',
			alias: 'n'
		},
		profile: {
			type: 'string',
			default: '',
			alias: 'prof'
		},
		province: {
			type: 'string',
			default: '',
			alias: 'prov'
		},
		city: {
			type: 'string',
			default: '',
			alias: 'city'
		},
		district: {
			type: 'string',
			default: '',
			alias: 'dist'
		},
	}
});
