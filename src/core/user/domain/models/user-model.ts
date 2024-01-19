export class UserModel {
  constructor(public params: UserModel.Params) {}
}

export namespace UserModel {
  export type Params = {
    name: string;
    email: string;
    password: string;
  }
}