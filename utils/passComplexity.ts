export enum PassStrength {
  TooWeak,
  Weak,
  Medium, 
  Strong,
}

export function determinePasswordComplexity(password: string): PassStrength {
  let complexity = PassStrength.Strong;
  return complexity;
}