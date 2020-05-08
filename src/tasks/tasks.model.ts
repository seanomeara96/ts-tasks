export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus; // We only allow one of the values in the TaskStatus enum
}
// Interfaces are a typescript concept that
// enforces the shape of an object upon compilation

// After compilation they are no longer interfaces but objects

// This is a typescript enumeration
// We want predefined options for status property
export enum TaskStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}