import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  inputTodo: string = '';
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    const data = localStorage.getItem('todo-list');
    if (data) {
      this.todos = JSON.parse(data);
    }
  }

  toggleDone(id: number): void {
    this.todos.map((todo, i) => {
      if (i === id) {
        return (todo.completed = !todo.completed);
      } else return (todo.completed = todo.completed);
    });
    localStorage.setItem("todo-list", JSON.stringify(this.todos));
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((value, i) => i !== id);
    localStorage.setItem("todo-list", JSON.stringify(this.todos));
  }

  addTodo() {
    this.todos = [
      ...this.todos,
      {
        content: this.inputTodo,
        completed: false,
      },
    ];
    localStorage.setItem("todo-list", JSON.stringify(this.todos));
  }
}
