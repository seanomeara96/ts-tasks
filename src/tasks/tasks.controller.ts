import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service'
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get() // This tells the function below to handle get requests to /tasks
    getAllTasks(){ // this.taskService was created in the constructor
        return this.tasksService.getAllTasks()
    }
}
