import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../shared/todo.service';
import { ITodo } from '../interfaces';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {
  todoId: string;
  isToastOpen: boolean;
  ionicForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private service: TodoService,
    private router: Router
  ) {
    this.todoId = '';
    this.isToastOpen = false;
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.route.params.subscribe((params) => {
      this.todoId = params['id'];
      this.service.getTodoById(params['id']).subscribe((res) => {
        const { status, message, data } = res;
        if (status == 'success') {
          this.ionicForm.patchValue({
            _id: params['id'],
            content: data[0].content,
          });
        }
      });
    });
  }

  submit(): void {
    const { _id, ...res }: ITodo = this.ionicForm.value;
    this.service.updateTodo(_id ?? '', res).subscribe((res) => {
      const { status, message } = res;
      if (status == 'success') {
        this.ionicForm.reset();
        this.isToastOpen = true;
        this.router.navigate(['/home']);
      }
    });
  }

  setOpen(bool: boolean): void {
    this.isToastOpen = bool;
  }
}
