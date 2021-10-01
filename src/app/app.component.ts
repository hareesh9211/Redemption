import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
 Users:any=[];

  addUserData(ref:any){
     let Userobj=ref.value;
    this.Users.push(Userobj)
    ref.reset();

  }
  
}
