export function hasPluralization(message: string): boolean {
	return / | /.test(message);
}

export function returnPluralization(message: string, n: number): string {
	if (!hasPluralization(message)) return message;
	const parts = message.split(/ \| /).filter((msg) => msg !== '|');
	switch (parts.length) {
		case 3:
			return parts[Math.min(n, 2)];
		case 2:
			return parts[Math.min(Math.max(n - 1, 0), 1)];
		default:
			return message;
	}
}
