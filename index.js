const Table = require('cli-table3');

const cli = require('./utils/cli.js');
const museum = require('./data/museum.js');

const {
	single,
	singleStates,
	style
} = require('./utils/table_museum.js');

const [input] = cli.input;
const rainbow = cli.flags.rainbow;
const name = cli.flags.name;

(async () => {
	input === 'help' && (await cli.showHelp(0));
	
	const data = input === 'data' ? true : false;
	const region = input === 'region' ? true : false;
	const table = new Table({ head: singleStates, style, chars: {} })
	
	museum(table, data, name);
})();
