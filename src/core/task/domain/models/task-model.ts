export class TaskModel {
  constructor(public params: TaskModel.Params) {}
}

export namespace TaskModel {
  export type Params = {
    title: string;
    author: string;
    created_at: Date;
    updated_at: Date | null;
  }
}