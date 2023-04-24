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

  const tests = [
    {
      regex: /[A-Z]/,
      chars: uppercaseLetters,
      needed: uppercase,
      paassed: false,
    },
    {
      regex: /[a-z]/,
      chars: lowercaseLetters,
      needed: lowercase,
      passed: false,
    },
    {
      regex: /\d/,
      chars: numbersString,
      needed: numbers,
      passed: false,
    },
    {
      regex: /[!@#$%^&*()_+~`|}{[\]:;?/><,.\/-=]/,
      chars: symbolsString,
      needed: symbols,
      passed: false,
    },
  ];
  let replacedIndexes: number[] = [];
  // Make sure the password has at least one of each selected character type 
  // repeat until all tests that needed are passed
  while (tests.some((test) => test.needed && !test.passed)) {
    // if all indexes have been replaced, start over
    if (replacedIndexes.length === generatedPassword.length) {
      replacedIndexes = [];
    }
    // prevent infinite loop
    if (replacedIndexes.length === generatedPassword.length) {
      break;
    }

    // find the first test that is needed and not passed
    const test = tests.find((test) => test.needed && !test.passed);
    if (!test) {
      break;
    } 
    // find a random index that has not been replaced yet
    let index = Math.floor(Math.random() * generatedPassword.length);
    while (replacedIndexes.includes(index)) {
      index = Math.floor(Math.random() * generatedPassword.length);
    }
    // replace the character at the index with a random character from the test's character set
    const charIndex = Math.floor(Math.random() * test.chars.length);
    const char = test.chars[charIndex];
    generatedPassword = generatedPassword.slice(0, index) + char + generatedPassword.slice(index + 1);
    // mark the index as replaced
    replacedIndexes.push(index);
    // check if the test is passed
    if (test.regex.test(generatedPassword)) {
      test.passed = true;
    }
  }

  return generatedPassword;
}
