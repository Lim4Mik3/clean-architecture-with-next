import { UseCaseResponseModel } from '../../../common/domain/models/handler-response-model';
import { TaskModel } from '../models/task-model'

export interface TaskListUseCase {
  execute: (params: TaskListUseCase.Params) => TaskListUseCase.ResponseType
}

export namespace TaskListUseCase {
  export type Params = Partial<{
    title: string;
    author: string;
  }>;

  export type ResponseType<P = any> = Promise<UseCaseResponseModel<TaskModel[], P>>
}