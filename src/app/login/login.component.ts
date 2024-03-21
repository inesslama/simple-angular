import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  signupUsers: any[]= [];
  signupObj: any = {
    userName: '',
    email : '',
    password : ''
  };
  constructor(private router: Router) {  }
  loginObj: any = {
    email : '',
    password : ''
  };

  ngOnInit(): void {
  const localData = localStorage.getItem('signupUsers');
  if(localData != null){

    this.signupUsers = JSON.parse(localData);

  }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
     this.signupObj = {
      userName: '',
      email : '',
      password : ''
    };

  }
  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if (isUserExist != undefined){
      alert ('user login succesuffuly !');
      this.router.navigateByUrl('/send');
    } else {
      alert('something wrong !!');
    }
  }

}
