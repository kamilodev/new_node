const { v4: uuidv4_plugin } = require('uuid');

const uuidv4 = () => uuidv4_plugin();

module.exports = {
	uuidv4,
};
