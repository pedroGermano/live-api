import TaskRepository from "../../repository/TaskRepository";

export class CompleteTask {
  constructor(readonly taskRepository: TaskRepository) {}

  async execute(taskId: string) {
    const task = await this.taskRepository.getOne(taskId);
    task.complete();
    this.taskRepository.complete(task)
    console.log("task completed");
  }
}
