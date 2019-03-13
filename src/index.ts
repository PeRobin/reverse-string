export function reverseString(arg: string): string {
    return [].reverse.call(arg.split('')).join('');
}