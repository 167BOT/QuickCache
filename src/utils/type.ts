type Types = 'str' | 'num' | 'bool' | 'func' | 'list' | 'map' | 'set' | 'dict' | 'symb' | 'unknown' | 'null'

function Type(value: any): Types {
    switch(typeof value) {
        case 'string':
            return 'str';
            break;

        case 'number':
            return 'num';
            break;

        case 'boolean':
            return 'bool';
            break;
            
        case 'function':
            return 'func';
            break;

        case 'object':
            if (value == null) return "null";
            if (value instanceof Map) return "map";
            if (value instanceof Set) return "set";
            if (Array.isArray(value)) return 'list';

            return 'dict';
            break;
        
        case 'symbol':
            return 'symb';
            break;

        default:
            return 'unknown';
    }
}

export default Type;