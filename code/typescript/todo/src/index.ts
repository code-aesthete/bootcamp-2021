import { Task } from "./Task";
import { TaskCollection } from "./TaskCollection";


let icollection: TaskCollection = new TaskCollection();
let icollection2: TaskCollection = new TaskCollection();

icollection.addTodo("first task");
icollection.addTodo("eat mangos");

icollection2.addTodo("second task");
icollection2.addTodo("eat apple");

icollection.taskDone(1);
icollection.printAll();


icollection2.taskDone(2);
icollection2.printAll();

let obj = {a:5, b:3 }