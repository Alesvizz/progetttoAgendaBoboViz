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
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  data: any;

  addComplete: boolean = false;

  task: any = {
    priority: 1,
    name: "",
    color: "#000000"
  };

  taskList1 :any[] = [];
  taskList2 :any[] = [];
  taskList3 :any[] = [];
  taskList4 :any[] = [];

  constructor(private taskService: TaskService) {}

  loadData(): void {
    this.taskService.getData().subscribe(
      (remoteData) => {
        this.data = remoteData;
        this.taskList1 = this.data.filter( (i:any) => i.priority == 1);
        this.taskList2 = this.data.filter( (i:any) => i.priority == 2);
        this.taskList3 = this.data.filter( (i:any) => i.priority == 3);      
        this.taskList4 = this.data.filter( (i:any) => i.priority == 4);
      }
    )
  }

  add() : void {

    this.taskService.addTask(this.task).subscribe(
      (response) => {
        this.addComplete = response;
        this.loadData();
      })
      
    }


    filterByType1 = {priority: 1};
    

  }
