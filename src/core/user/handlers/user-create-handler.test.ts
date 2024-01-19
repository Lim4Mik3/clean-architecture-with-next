import { IUserRepository } from "../data/IUserRepository";
import { UserModel } from "../domain/models/user-model";
import { UserCreateUseCase } from "../domain/usecases/user-create-use-case";
import { UserCreateHandler } from "./user-create-handler"
import { UserEmailAlreadyExistsError } from "../domain/error/user-email-already-exists-error";

describe('user-create-handler | HANDLER TEST', () => {
  let userRepositoryMock: IUserRepository;
  let sut: UserCreateUseCase;

  beforeEach(() => {
    userRepositoryMock = {
      create: vi.fn(),
      findByEmail: vi.fn(),
    }
    sut = new UserCreateHandler(userRepositoryMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  })

  it('should be able call "create" repository with the correct arguments', async () => {
    const user: UserModel = {
      params: {
        email: 'test',
        name: 'leo',
        password: '1212'
      }
    }

    await sut.execute(user.params);

    expect(userRepositoryMock.create).toHaveBeenCalledWith(user.params);
  })

  it('should returns "false" if "create" fails', async () => {
    const user: UserModel = {
      params: {
        email: 'test',
        name: 'leo',
        password: '1212'
      }
    }

    userRepositoryMock.create.mockResolvedValue(false);

    await sut.execute(user.params);
    await sut.execute(user.params);

    expect((await sut.execute(user.params)).data).toBe(false);
  })

  it('should returns "user-email-already-in-use" error instance if an user already exists', async () => {
    const user: UserModel = {
      params: {
        email: 'test',
        name: 'leo',
        password: '1212'
      }
    }
 
    await sut.execute(user.params);
    
    userRepositoryMock.create.mockRejectedValue(new UserEmailAlreadyExistsError());
    await sut.execute(user.params);

    expect((await sut.execute(user.params)).error).toBeInstanceOf(UserEmailAlreadyExistsError)
    expect((await sut.execute(user.params)).message).toBe('This e-mail is currently in use for another user.')
  })
})