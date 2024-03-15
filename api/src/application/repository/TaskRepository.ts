import Task from "../../domain/entity/Task";

export default class TaskRepository {
  constructor(readonly dbConnection: any) {}

  async create(task: Task): Promise<void> {
    await this.dbConnection("task").insert({
      id: task.id,
      title: task.title,
      created_at: task.createdAt,
    });
  }

  async complete(task: Task): Promise<void> {
    await this.dbConnection("task").where({ id: task.id }).update({
      done: task.done,
      updated_at: task.updatedAt,
    });
  }

  async getOne(taskId: string): Promise<Task> {
    const taskData = await this.dbConnection("task")
      .where({ id: taskId })
      .first();
    const task = new Task(
      taskData.id,
      taskData.title,
      taskData.createAt,
      taskData.updatedAt
    );
    return  task;
  }
}
