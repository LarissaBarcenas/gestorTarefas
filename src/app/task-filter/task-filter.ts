import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.scss',
})
export class TaskFilter {

  filter: string = '';

  @Output() taskFilter = new EventEmitter<string>();

  filterTask() {
    this.taskFilter.emit(this.filter);
  }

}
