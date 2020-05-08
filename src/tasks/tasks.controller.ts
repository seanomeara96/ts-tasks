import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { Task } from './tasks.model';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get() // This tells the function below to handle get requests to /tasks
    getAllTasks() :Task[] {  // Returns an array of type Task
        // this.taskService was created in the constructor
        return this.tasksService.getAllTasks()
    }
    @Post()
    createTask (
        @Body("title") title: string, 
        @Body("description") description: string
    ) :Task { // Returns a single task
        return this.tasksService.createTask(title, description)
    }
}
