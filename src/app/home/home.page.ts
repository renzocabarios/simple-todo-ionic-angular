import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { ITodo } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos: ITodo[] = [];

  constructor(private service: TodoService, private router: Router) {}

  ngOnInit(): void {}

  ionViewDidEnter() {
    this.service.getTodos().subscribe((res) => {
      const { status, data } = res;
      if (status == 'success') this.todos = data;
    });
  }

  deleteTodo(id: string): void {
    this.service.deleteTodo(id).subscribe((res) => {
      const { status } = res;
      if (status == 'success') {
      }
    });
  }

  navigate(): void {
    this.router.navigate(['/create-todo']);
  }
}
