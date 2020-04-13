const meow = require('meow');

module.exports = meow(`
	Usage
		$ museum <command> [--option]

	Commands
		data                      get data museum
		region                    get data region

	Options
		-n,    --name             search by name
		-prov, --province         search by code province
		-city, --city             search by code city
		-dist, --district         search by code district
		-det,  --detail           get detail by sort number

	Examples
		$ museum data --name "wayang"
		data museum wayang
		
		$ museum data --name "wayang" --detail=2
		detail museum wayang by sort number
		
		$ museum data --province "010000"
		data museum by code province
		
		$ museum data --province "010000" --detail=4
		detail museum province by sort number
		
		$ museum data --city "016200"
		data museum by code city
		
		$ museum data --city "016200" --detail=6
		data museum city by sort number
		
		$ museum data --district "016001"
		data museum by code district
		
		$ museum data --district "016001" --detail=1
		data museum district by sort number
`, {
	alias: {
		name: {
			type: 'string',
			default: '',
			alias: 'n'
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
		detail: {
			type: 'number',
			default: Number.MAX_SAFE_INTEGER,
			alias: 'det'
		},
	}
});
