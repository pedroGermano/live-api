import express from "express";
import cors from "cors";
import TaskController from "./application/controller/TaskController";
import { CreateTask, CompleteTask } from './application/userCases/Task'
import TaskRepository from "./application/repository/TaskRepository";

const taskRepository = new TaskRepository();

const createTask = new CreateTask(taskRepository);
const completeTask = new CompleteTask(taskRepository);
const taskController = new TaskController(createTask, completeTask)


const app = express();

app.use(express.json());
app.use(cors());


app.post("/task", taskController.create.bind(taskController))
app.put("/task/:id/complete", taskController.complete.bind(taskController))


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
