import Task from "../../../domain/entity/Task";
import TaskRepository from "../../repository/TaskRepository";

export class CreateTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(title: string): Promise<Task> {
    const task = Task.create(title);

    await this.taskRepository.create(task);
    console.log("task created");

    return task;
  }
}
