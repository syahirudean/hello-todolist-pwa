import { Component, OnInit } from '@angular/core';

import { TodoListService } from './todo-list.service';
import { Todo } from './todo-list.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  editState = false;
  edit: Todo;
  editForm: FormGroup;

  constructor(
    public todoListService: TodoListService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.todoListService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todoList = todos;
    });

    this.editForm = this.fb.group({
      title: '',
      description: '',
    });
  }

  deleteTodo(event, todo: Todo): void {
    this.close();
    this.todoListService.deleteTodo(todo);
  }

  editTodo(event, todo: Todo): void {
    this.editState = true;
    this.edit = todo;
  }

  close(): void {
    this.editState = false;
  }

  updateTodo(todo: Todo): void {
    this.todoListService.updateTodo(todo);
    this.close();
  }

}
