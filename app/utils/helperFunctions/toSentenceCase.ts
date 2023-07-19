export function toSentenceCase(str: string): string {
  // Convert the first character to uppercase and the rest to lowercase
  const firstChar = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1).toLowerCase();

  // Combine the first character and the rest of the string
  return `${firstChar}${restOfString}`;
}

export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function detectDate(input: string) {
  // Regular expression for yyyy-mm-dd format
  const regex1 = /^\d{4}-\d{2}-\d{2}$/;

  // Regular expressions for mm/dd/yyyy, dd/mm/yyyy, and yyyy/mm/dd formats
  const regex2 = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2[0-8])\/\d{4}$/; // mm/dd/yyyy
  const regex3 = /^(0[1-9]|1\d|2[0-8])\/(0[1-9]|1[0-2])\/\d{4}$/; // dd/mm/yyyy
  const regex4 = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2[0-8])$/; // yyyy/mm/dd

  if (regex1.test(input)) {
    return true;
  } else if (regex2.test(input)) {
    return true;
  } else if (regex3.test(input)) {
    return true;
  } else if (regex4.test(input)) {
    return true;
  } else {
    return false;
  }
}
