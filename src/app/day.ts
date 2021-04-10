import { Task } from "./task";

export interface Day{
    id: number;
    createdDate: string;
    todayNotes: string;
    tasks: Task[];
}