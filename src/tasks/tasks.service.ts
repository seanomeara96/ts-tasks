import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import {v1 as uuid} from "uuid"
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];
    
    // this :Task[] simply defining the type
    getAllTasks() :Task[] {
        return this.tasks;
    }
    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }
    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            title, 
            description, 
            status: TaskStatus.OPEN,
        }
        this.tasks.push(task);
        return task;
    }
    deleteTask(id: string): Task[] {
        return this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: string, taskKey: string, newVal) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                switch(taskKey){
                    case "title":
                        return {...task, title: newVal};
                    case "description":
                        return {...task, description: newVal};
                    case "status":
                        return {...task, status: newVal};
                }
            }
            return task;
        })
    }
}
