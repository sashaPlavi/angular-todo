import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'sada',
        completed: false,
      },
      {
        id: 2,
        title: '2sada',
        completed: false,
      },
      {
        id: 3,
        title: '3sada',
        completed: false,
      },
      {
        id: 4,
        title: '4sada',
        completed: true,
      },
    ];
  }
}
