import crypto from 'crypto'

export default class Task {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly createdAt: Date,
  ){}

  static create(title: string){
    const taskId = crypto.randomUUID()
    
    return new Task(taskId, title, new Date());
  }

}