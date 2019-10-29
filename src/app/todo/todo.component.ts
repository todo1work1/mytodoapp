import { Component, OnInit } from '@angular/core';
import {TodoService  } from "./shared/todo.service";
import {AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: []
})
export class TodoComponent implements OnInit {
 todos = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodos().snapshotChanges().subscribe(items => {
      items.forEach(item => {
       // console.log(item);
        this.todos.push({
          task:item.payload.toJSON(),
          
          key: item.key
        });
      });
      
    });
  }

  addTask(task){
    this.todoService.addTodo(task.value);
  }

  removeTask(key){
    console.log(key);
  }

}
