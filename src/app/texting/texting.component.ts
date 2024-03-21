import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texting',
  templateUrl: './texting.component.html',
  styleUrl: './texting.component.css'
})
export class TextingComponent implements OnInit {
  messageUsers: any[]= [];
  messageObj: any = {
    message: '',
    
  };
  constructor() {  }
  

  ngOnInit(): void {
  
  }
  onclick(){
    this.messageUsers.push(this.messageObj);
    localStorage.setItem('messageUsers',JSON.stringify(this.messageUsers));
     this.messageObj = {
      message: '',
      
    };

  }
  


}
