export class HexadecimalHelper {
  public static binToHex(value: number): string {
    return value.toString(16);
  }

  public static hex2string(hex: string | number): string {
    const hexStr = hex.toString();
    let str = '';

    for (let i = 0; i < hexStr.length; i += 2) {
      str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
    }

    return str;
  }
}
