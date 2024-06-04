import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../services/tutorials.service';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AgendaComponent } from '../agenda/agenda.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, AgendaComponent, MatButtonModule, MatCardModule, MatIconModule, MatDividerModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  msg:any

  data: any;
  

  utente: any = null;

  newUtente: any = null;

  loginSuccesso: boolean = false;

  errorLogin = false;

  regSuccess = false;

  ngOnInit(): void {

    this.loginUtente();
  }

  loginUtente():void {
    this.utente = {
      username: "",
      password: ""
    }

    this.newUtente = null;
  }

  nuovoUtente():void {
    this.newUtente = {
      username: "",
      password: "",
      email: "",
      name: "",
      surname: "",
    }

    this.utente = null;
  }


  constructor(private userService: UserService) {


  }

  login(): void{
    
      this.userService.loginUsers(this.utente).subscribe(
        (response) => {
          this.loginSuccesso = response;

          this.utente.username=""
          this.utente.password=""

          this.userService.setLoggedinUser(this.utente);
        }
      )
    
  }

  controlloLogin(): void{
    if(this.data.valid){
      this.loginSuccesso = true;
      this.errorLogin = false;
    } else {
      this.errorLogin = true;
    }
  } 

  registration(): void{

    this.userService.createUser(this.newUtente).subscribe(
      (remoteData) => {

        this.newUtente.username=""
        this.newUtente.password=""
        this.newUtente.email=""
        this.newUtente.name=""
        this.newUtente.surname=""

        
        

      }
    );


  
  }

  controlReg(): boolean {
    if (this.newUtente.password == "" || this.newUtente.username == "") return false;
    else return true;
  }

  controlLog(): boolean {
    if (this.utente.password == "" || this.utente.username == "") return false;
    else return true;
  }

  registerConfirm(): void{
    this.regSuccess = true;
  }

  indietro(): void{
    this.loginSuccesso = false;
    this.regSuccess = false;
  }
}
