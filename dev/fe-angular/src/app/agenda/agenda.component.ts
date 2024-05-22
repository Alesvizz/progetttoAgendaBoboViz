import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  task: any = {
    priority: 1,
    name: "",
    color: "#0000000"
  };

  taskList1 :any[] = [];
  taskList2 :any[] = [];
  taskList3 :any[] = [];
  taskList4 :any[] = [];

  add() : void {

    if(this.task.priority == 1) this.taskList1.push(this.task);
    else if(this.task.priority == 2) this.taskList2.push(this.task);
    else if(this.task.priority == 3) this.taskList3.push(this.task);
    else if(this.task.priority == 4) this.taskList4.push(this.task);
  }

  delete(id: any, array: any[]) : void {
    array.splice(id,1);
  }
}
