import { UserModel } from "../../domain/models/user-model";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
  public users: UserModel[];

  constructor() {
    this.users = [];
  }

  async create(user: UserModel.Params): Promise<boolean> {
    if (await this.findByEmail(user.email)) return false;

    this.users.push({ params: user });

    return true;
  }

  async findByEmail(email: string): Promise<UserModel> {
    const userWasFound = this.users.filter((user) => user.params.email === email);

    return userWasFound[0] ?? null;
  }
}