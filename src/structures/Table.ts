import Slot from './Slot';
import toBinary from '../utils/toBinary';

interface SlotsOptions {
    max?: number;
    auto?: boolean;
    maxItems?: number;
}

interface TableOptions {
    slots?: SlotsOptions;
}

class Table {
    private rules: TableOptions;
    #container: Set<Slot>;

    constructor(options: TableOptions = {}) {
        this.#container = new Set();
        this.rules = options;
    }

    createSlot(): this {
        this.#container.add(new Slot())
        return this;
    }

    insert(key: string, value: any): this {
        // make hash
        console.log(toBinary(key));
        console.log(toBinary(value));
        return this;
    }
}

export default Table;