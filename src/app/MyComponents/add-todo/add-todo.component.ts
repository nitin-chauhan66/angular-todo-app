import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
import { splitNsName } from '@angular/compiler';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title!:string
  desc!:string
  @Output() addTodo :EventEmitter<Todo> = new EventEmitter();
 
  onSubmit(){
    const todo = new Todo(Math.floor(Math.random() * (100000 - 1 + 1)) + 1,this.title,this.desc,true)
    this.addTodo.emit(todo)
  }
}
