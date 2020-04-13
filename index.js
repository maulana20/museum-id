const cli = require('./utils/cli.js');
const museum = require('./data/museum.js');

const [input] = cli.input;

const name = cli.flags.name;
const profile = cli.flags.profile;
const province = cli.flags.province;
const city = cli.flags.city;
const district = cli.flags.district;
const detail = cli.flags.detail;

(async () => {
	input === 'help' && (await cli.showHelp(0));
	
	const data = input === 'data' ? true : false;
	const region = input === 'region' ? true : false;
	museum(data, name, profile, province, city, district, detail);
})();
