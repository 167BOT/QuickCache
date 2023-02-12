function toUTF8(binary: number[]): string {
  let output: string = "";

  for (let value of binary.reverse()) {
    output += String.fromCharCode(parseInt(`${value}`, 2));
  }

  return output;
}

export default toUTF8;