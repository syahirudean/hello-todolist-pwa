import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.scss']
})
export class AddTodoListComponent implements OnInit {
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoListService: TodoListService
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: '',
      description: '',
    });

    // this.todoForm.valueChanges.subscribe(console.log);
  }

  onSubmit(): void {
    console.log(this.todoForm.value);
    if (
      this.todoForm.value.title !== '' &&
      this.todoForm.value.description !== ''
    ) {
      this.todoListService.addTodo(this.todoForm.value);
      this.todoForm.reset(this.todoForm);
    }
  }

}
