export class UserEmailAlreadyExistsError extends Error {
  constructor() {
    super('This e-mail is currently in use for another user.');
    this.name = "UserEmailAlreadyExistsError"
  }
}