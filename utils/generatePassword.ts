export interface PasswordGeneratorSettings {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  [key: string]: boolean | number;
}

export function generatePassword({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
}: PasswordGeneratorSettings) {
  if (!length) {
    return "";
  }
  if (!uppercase && !lowercase && !numbers && !symbols) {
    return "";
  }

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbersString = "0123456789";
  const symbolsString = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let validChars = "";
  if (uppercase) {
    validChars += uppercaseLetters;
  }
  if (lowercase) {
    validChars += lowercaseLetters;
  }
  if (numbers) {
    validChars += numbersString;
  }
  if (symbols) {
    validChars += symbolsString;
  }
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
  }
  return generatedPassword;
}
