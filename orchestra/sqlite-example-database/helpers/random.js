function pickRandom(args) {
	return args[Math.floor(Math.random() * args.length)];
}

function randomDate() {
	return new Date(new Date() - 200000000000 * Math.random());
}

module.exports = { pickRandom, randomDate };
