import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TodoService } from '../shared/todo.service';
import { ITodo } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})
export class CreateTodoPage implements OnInit {
  ionicForm: FormGroup = new FormGroup({
    content: new FormControl(''),
  });

  constructor(
    public formBuilder: FormBuilder,
    private service: TodoService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit(): void {
    const temp: ITodo = this.ionicForm.value;
    this.service.addTodo(temp).subscribe((res) => {
      const { status, message } = res;
      if (status == 'success') {
        this.ionicForm.reset();
        this.router.navigate(['/home']);
      }
    });
  }
}
