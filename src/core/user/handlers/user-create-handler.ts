import { UserCreateUseCase } from '../domain/usecases/user-create-use-case'
import { IUserRepository } from '../data/IUserRepository'
import { InMemoryUserRepository } from '../data/implementations/InMemoryUserRepository';

export class UserCreateHandler implements UserCreateUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(params: UserCreateUseCase.Params): UserCreateUseCase.ResponseType {
    try {
      const userCreated = await this.userRepository.create(params);

      return {
        data: userCreated,
        message: 'Operação realizada com sucesso',
        error: null,
      }
    } catch (error) {
      return  {
        error,
        data: null,
        message: error.message ?? 'Ocorreu um erro ao criar o usuário',
      }
    }
  }
}

// const respository = new InMemoryUserRepository();
// const handler = new UserCreateHandler(respository);
// const response = await handler.execute({ email: 'test@test.com', name: 'adasd', password: '12123' });
