import toBinary from "./toBinary";
import toUTF8 from "./toUTF8";

function resolveValue(value: string): any {
    let REGEXP = new RegExp(
        "(?<=^str|^num|^bool|^func|^list|^map|^set|^dict|^symb|^null|^unknown)-",
        "g"
    );

    let [type, resolvedValue] = value.split(REGEXP);

    if (type == 'list' || type == 'dict' || type == 'null' || type == 'bool' || type == 'num')
        return JSON.parse(resolvedValue);

    let func = new Function(resolvedValue);
    func();
}

let key = toBinary('id');
let value = toBinary(() => {});

resolveValue(toUTF8(value));