import { UserModel } from "../../domain/models/user-model";
import { InMemoryUserRepository } from "./InMemoryUserRepository"

const sut = () => {
  const repository = new InMemoryUserRepository();

  return { repository };
}

describe('in memory user repository test', () => {
  it('should be able store an user', async () => {
    const { repository } = sut();

    const user: UserModel = {
      params: {
        email: 'test@test',
        name: 'Jhon Doe',
        password: '12345'
      }
    }

    await repository.create(user.params);

    expect(repository.users).toEqual(expect.arrayContaining([user]));
    expect(repository.users.length).toBe(1);
  })
})