
export class UnexpectedError extends Error {
  constructor() {
    super('Some unexpected error happened.');
    this.name = "UnexpectedError"
  }
}