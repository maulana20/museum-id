const cli = require('./utils/cli.js');
const museum = require('./data/museum.js');

const [input] = cli.input;
const rainbow = cli.flags.rainbow;
const name = cli.flags.name;

(async () => {
	input === 'help' && (await cli.showHelp(0));
	
	const data = input === 'data' ? true : false;
	const region = input === 'region' ? true : false;
	
	console.log(input, data, name);
	museum(data, name);
})();
