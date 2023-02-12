import Type from "./type"

function toBinary(value: any): number[] {
    let type = Type(value);
    let RAW_VALUE: string = "";

    if (type == "unknown") RAW_VALUE = "undefined";
    else if (type == 'symb') RAW_VALUE = `${value.description}`;
    else if (type == 'list' || type == 'dict' || type == 'null' || type == 'bool' || type == 'num') RAW_VALUE = JSON.stringify(value);
    else if (type == 'func') RAW_VALUE = value.toString();
    else if (type == 'map') RAW_VALUE = JSON.stringify([...value.entries()]);
    else if (type == 'set') RAW_VALUE = JSON.stringify([...value.values()]);
    else RAW_VALUE = value;

    RAW_VALUE = type+'-'+RAW_VALUE;
    let binary: number[] = [];

    for (let i = 0;i < RAW_VALUE.length;i++) {
        let char = parseInt(RAW_VALUE.charCodeAt(i).toString(2));

        binary.push(char);
    }

    return binary.reverse();
}

export default toBinary;