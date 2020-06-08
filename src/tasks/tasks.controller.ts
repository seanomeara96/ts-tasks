import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { get } from 'http';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get() // This tells the function below to handle get requests to /tasks
    getTasks(@Query() filterDto: GetTaskFilterDto) :Task[] { 
        
        console.log(filterDto);
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
    @Patch("/:id/:key")
    updateTask(@Param("id") id: string, @Param("key") key: string, @Body("newVal") newVal) {
        return this.tasksService.updateTask(id, key, newVal)
    }
}
