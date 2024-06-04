import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TutorialsService } from './services/tutorials.service';
import { LoginComponent } from './login/login.component';
import { AgendaComponent } from './agenda/agenda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, HttpClientModule, LoginComponent, AgendaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fe-angular';
  isLogged = false; 
  tutorials: any;

  constructor(private tutorialsService: TutorialsService) {}

  ngOnInit() {
    this.tutorialsService.getTutorials().subscribe((data: any) => {
      this.tutorials = data;
    });

  }

}
