class CacheError extends Error {
	constructor(message: string) {
		super();

		this.name = '[Cache Error]';
		this.message = message;
	}
}

export default CacheError;
