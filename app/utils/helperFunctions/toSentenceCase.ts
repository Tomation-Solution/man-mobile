export function toSentenceCase(str: string): string {
  // Convert the first character to uppercase and the rest to lowercase
  const firstChar = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1).toLowerCase();

  // Combine the first character and the rest of the string
  return `${firstChar}${restOfString}`;
}
