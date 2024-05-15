import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TutorialsService } from '../services/tutorials.service';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  data: any;

  utente: any = null;

  newUtente: any = null;

  loginSuccesso: boolean = false;

  errorLogin = false;

  regSuccess = false;

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
        //...
      }
    );

  //...
  
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
