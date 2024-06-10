import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass,NgIf],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter();
  constructor(){
  }
  onDeleteItem(){
    this.todoDelete.emit(this.todo);
    console.info("Delete button clicked")
  }
  onCheckboxClick(){
    this.todoCheckbox.emit(this.todo)
    console.info("check box clicked",this.todo)
  }
}
