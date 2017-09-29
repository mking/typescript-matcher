class PasswordValidator {
  constructor(s) {
    this.s = s;
  }

  isValidPassword() {
    return this.s.length > 0;
  }
}

export default function isValidPassword(s) {
  return new PasswordValidator(s).isValidPassword();
}