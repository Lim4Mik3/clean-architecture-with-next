import { UserModel } from "../domain/models/user-model";

export interface IUserRepository {
  create(user: UserModel.Params): Promise<boolean>;
  findByEmail(email: string): Promise<UserModel>;
}