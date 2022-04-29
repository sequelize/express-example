export function pickRandom(args: string[]) {
	return args[Math.floor(Math.random() * args.length)];
}

export function randomDate() {
	return new Date(+new Date() - 200000000000 * Math.random());
}
