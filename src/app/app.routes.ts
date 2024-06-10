import { Routes } from '@angular/router';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { AboutComponent } from './MyComponents/about/about.component';

export const routes: Routes = [
    { path: "", component: TodoComponent },
    { path: "about", component: AboutComponent },
];
