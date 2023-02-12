import {Table} from '../src/index';
import toUTF8 from '../src/utils/toUTF8';
import toBinary from '../src/utils/toBinary';

const table = new Table();

let key = toBinary('nickname');
let value = toBinary('hbc-dev');

console.log(
    toUTF8(key),
    toUTF8(value)
);
