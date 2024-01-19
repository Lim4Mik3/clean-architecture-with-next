import { UseCaseResponseModel } from '../../../common/domain/models/handler-response-model';
import { TaskModel } from '../models/task-model'

export interface TaskEditUseCase {
  execute: (params: TaskEditUseCase.Params) => TaskEditUseCase.ResponseType
}

export namespace TaskEditUseCase {
  export type Params = Partial<{
    title: string;
    author: string;
    updated_at: string;
  }>;

  export type ResponseType<P = any> = Promise<UseCaseResponseModel<TaskModel, P>>
}