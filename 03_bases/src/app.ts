// const { emailTemplate } = require('./js-foundation/01-template');
import { buildLogger } from './plugins/logger.plugin';
import { getPokemonName } from './js-foundation/06-promises';
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { getUserById } = require('./js-foundation/05-factory');
// const { getPokemonName } = require('./js-foundation/06-promises');

getPokemonName(14).then(pokemon => {
	console.log(pokemon);
});

const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Esto es algo malo');
