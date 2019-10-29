import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: AngularFireList<any>;
  constructor(private firedatabase:  AngularFireDatabase) { }

  getAllTodos() {
    this.todos =this.firedatabase.list('todos');
    return this.todos;
  }

  addTodo(title: string){
    this.todos.push({
      todo: title,
      iscompleted: false
    });
  }

  updateTodoStatus($key:string, status:boolean){
    this.todos.update($key, {iscompleted: status});
  }
  deleteTodo(key: string){
    this.todos.remove(key);
  }
}
