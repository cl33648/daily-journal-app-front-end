import { Day } from "./day";

export interface Task{
    id: number;
    taskName: string;
    description: string;
    day: Day;
}