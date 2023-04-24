export enum PassStrength {
  TooWeak,
  Weak,
  Medium,
  Strong,
}

export function determinePasswordComplexity(password: string): PassStrength {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbersString = "0123456789";
  const symbolsString = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numbersRegex = /\d/;
  const symbolsRegex = /[!@#$%^&*()_+~`|}{[\]:;?/><,.\/-=]/;

  let entropy = 0;
  if (lowercaseRegex.test(password)) {
    entropy += lowercaseLetters.length;
  }
  if (uppercaseRegex.test(password)) {
    entropy += uppercaseLetters.length;
  }
  if (numbersRegex.test(password)) {
    entropy += numbersString.length;
  }
  if (symbolsRegex.test(password)) {
    entropy += symbolsString.length;
  }

  const passwordEntropy = Math.log2(entropy) * password.length;

  if (passwordEntropy < 28) {
    return PassStrength.TooWeak;
  }
  if (passwordEntropy < 36) {
    return PassStrength.Weak;
  }
  if (passwordEntropy < 60) {
    return PassStrength.Medium;
  }
  return PassStrength.Strong;
}
