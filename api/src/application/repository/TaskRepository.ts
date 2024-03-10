import Task from '../../domain/entity/Task'

export default class TaskRepository{
  constructor() {

  }

  async create(task: Task): Promise<void>{

    console.log('task created on database')
  }

  async complete(task: Task): Promise<void> {
    console.log('task completed on database')

    
  }

  async getOne(taskId: string): Promise<Task> {
    console.log("task getted on database")
    return new Task("1", "title", new Date())
  }
}