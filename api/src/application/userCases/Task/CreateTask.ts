import Task from "../../../domain/entity/Task";
import TaskRepository from "../../repository/TaskRepository";

export class CreateTask {
  constructor(readonly taskRepository: TaskRepository) {}

  execute(title: string) {
    const task = Task.create(title);

    this.taskRepository.create(task);

    return task
  }
}
