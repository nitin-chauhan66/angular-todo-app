import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoComponent } from "./MyComponents/todo/todo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoComponent, RouterLink]
})
export class AppComponent {
  title = 'angular-todo-app';
}
