import { todoInterface } from './interfaces.js';

export async function getTodosByCount(count: number): Promise<todoInterface[]> {
  const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: todoInterface[] = await response.json();
  return todos.slice(0, count);
}