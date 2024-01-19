import { UseCaseResponseModel } from '../../../common/domain/models/handler-response-model';
import { TaskModel } from '../models/task-model'

export interface TaskCreateUseCase {
  execute: (params: TaskCreateUseCase.Params) => TaskCreateUseCase.ResponseType;
}

export namespace TaskCreateUseCase {
  export type Params = {
    title: string;
    author: string;
    created_at: string;
  };

  export type ResponseType<P = any> = Promise<UseCaseResponseModel<TaskModel, P>>
}