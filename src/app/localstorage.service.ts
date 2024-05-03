import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private keys="12345"

  constructor() { }

  public saveData(keys: string, data: string): void{
    localStorage.setItem(keys,this.encrypt(data));
  }
  public getData(keys:string){
    let data = localStorage.getItem(keys)||"";
    return this.decrypt(data);
  }
  public removeData(keys:string){
    localStorage.removeItem(keys);

  }
  public clearData(){
    localStorage.clear();
  }
  private encrypt(txt:string):string{
    return CryptoJs.AES.encrypt(txt, this.keys).toString();
  }
  private decrypt (txtToDecrypt:string): string{
    return CryptoJs.AES.decrypt(txtToDecrypt, this.keys).toString(CryptoJs.enc.Utf8);
  }


  //Set Item in local storage

  setItem(key: string, value:any):void{
    localStorage.setItem(key, value);
  }
  //get a value from local storage
  getItem(key:string):string| null{
    return localStorage.getItem(key)
  }
  //remove item from local storage
  removeItem(key:string):void{
    localStorage.removeItem(key)
  }
  //Clear all items from local storage
  clearAll():void{
    localStorage.clear()
  }
}
