import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  namename:string;

  constructor() { }
  name(name)
  {
    this.namename=name;
  }
}
