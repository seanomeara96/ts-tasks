import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { get } from 'http';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get() // This tells the function below to handle get requests to /tasks
    getAllTasks() :Task[] {  // Returns an array of type Task
        // this.taskService was created in the constructor
        return this.tasksService.getAllTasks()
    }
    @Get("/:id")
    getTaskById(@Param("id") id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask (@Body() createTaskDto: CreateTaskDto) :Task { // Returns a single task
        return this.tasksService.createTask(createTaskDto)
    }
    @Delete("/:id")
    deleteTask(@Param("id") id: string): Task[] {
        return this.tasksService.deleteTask(id)
    }
}
