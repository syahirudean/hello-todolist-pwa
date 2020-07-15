import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';

@NgModule({
  declarations: [TodoListComponent, AddTodoListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TodoListComponent, AddTodoListComponent]
})
export class TodoListModule {}
