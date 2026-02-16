import { Routes } from '@angular/router';
import { TaskDetails } from './task-details/task-details';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
    {path: 'taskList', title: 'Lista de tarefas', component: TaskList},
    {path: 'taskDetails', title: 'Detalhes da Tarefa', component: TaskDetails},
    {path: '', redirectTo: 'taskList', pathMatch: 'full'}
];
