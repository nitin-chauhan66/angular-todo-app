import { Component, afterRender } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [NgFor,NgIf, TodoItemComponent, AddTodoComponent]
})
export class TodoComponent {
  todos!:Todo[]
  localTodos!:string|null
  constructor(){
      this.localTodos = localStorage.getItem("todos");
      if (this.localTodos===null){
        this.todos = []
      }else{
        this.todos = JSON.parse(this.localTodos)
      }
  }

  deleteTodo(todo:Todo){
    console.info(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  todoAdd(todo:Todo){
    console.info("Adding new",todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  handleCheckboxClick(todo:Todo){
    this.todos.map((todoItem)=>{
      if (todoItem.sno === todo.sno){
        todoItem.active = !todoItem.active 
      }
    })
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
