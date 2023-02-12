class LocalCache extends Map {
	constructor() {
		super()
	}

	insert(key: string, value: any): this {
		return this;
	}
}

export default LocalCache;
