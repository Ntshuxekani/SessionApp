import { Component } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sessionApp';
  constructor(private localStorageService: LocalstorageService){}
//Save Item to local storage
savetoLocalStorage(){
  this.localStorageService.setItem('myKey', 'myValue');
}
//retrieve Item from local storage
retrieveFromLocalStorage(){
  const value = this.localStorageService.getItem('myKey');
  console.log(value);
}
saveUser(){
  this.localStorageService.saveData("userId", "AdminUser");
}
getUserId(){
  console.log(this.localStorageService.getData("userId"));
}
 
 
}

