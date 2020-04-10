const meow = require('meow');

module.exports = meow(`
	Usage
		$ museum <command> [--option]

	Commands
		data                get data by name
		foo                 get data Foo

	Options
		-r, --rainbow       include a rainbow
		-n, --name          search by name

	Examples
		$ museum data --rainbow
		unicorns rainbow
		
		$ museum data --name wayang
		data museum wayang
`, {
	alias: {
		reverse: {
			type: 'rainbow',
			default: false,
			alias: 'r'
		},
		name: {
			type: 'string',
			default: '',
			alias: 'n'
		},
	}
});
