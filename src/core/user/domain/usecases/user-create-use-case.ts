import { UseCaseResponseModel } from "../../../common/domain/models/handler-response-model";

export interface UserCreateUseCase {
  execute(params: UserCreateUseCase.Params): UserCreateUseCase.ResponseType;
}

export namespace UserCreateUseCase {
  export type Params = {
    name: string;
    email: string;
    password: string;
  }

  export type ResponseType<P = any> = Promise<UseCaseResponseModel<boolean, P>>
}