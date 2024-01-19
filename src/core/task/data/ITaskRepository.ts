import { TaskModel } from "../domain/models/task-model";

export interface ITaskRepository {
  create(task: TaskModel.Params): Promise<boolean>;
  findByTitle(title: string): Promise<TaskModel>;
}