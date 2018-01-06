import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {

  public storage: any;

  setStorage(value: any) {
    this.storage = value;
  }

  getStorage(): any {
     return this.storage;
  }

  clearStorage() {
    this.storage = "";
  }

  constructor() { }

}
