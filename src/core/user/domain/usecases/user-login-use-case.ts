import { UseCaseResponseModel } from "../../../common/domain/models/handler-response-model";
import { UserModel } from "../models/user-model";

export interface UserLoginUseCase {
  execute: (params: UserLoginUseCase.Params) => UserLoginUseCase.ResponseType
}

export namespace UserLoginUseCase {
  export type Params = {
    email: string;
    password: string;
  };

  export type ResponseType<P = any> = 
    Promise<UseCaseResponseModel<Omit<UserModel.Params, 'password'>, P>>
}