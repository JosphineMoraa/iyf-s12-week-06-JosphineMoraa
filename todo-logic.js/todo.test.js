import { describe, it, expect } from 'vitest';
import { addTodo, toggleTodo, removeTodo } from '../js/todo-logic.js';

describe('todo logic', () => {
  it('adds a todo', () => {
    expect(addTodo([], 'Study').length).toBe(1);
  });
  it('toggles a todo', () => {
    const todos = [{ id: 1, text: 'A', done: false }];
    expect(toggleTodo(todos, 1)[0].done).toBe(true);
  });
  it('removes a todo', () => {
    const todos = [{ id: 1, text: 'A', done: false }];
    expect(removeTodo(todos, 1)).toEqual([]);
  });
});