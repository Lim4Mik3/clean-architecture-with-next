import { UserCreateHandler } from "../../handlers/user-create-handler";
import { makeInMemoryUserRepository } from '../repositories/makeInMemoryUserRepository'

export const makeUserCreateHandler = () => {
  const userRepository = makeInMemoryUserRepository();
  const userCreateHandler = new UserCreateHandler(userRepository);

  return userCreateHandler;
}