import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { UUID } from 'angular2-uuid';

@Injectable()
export class KeyGenerator {

  constructor() { }

  create(): string {
    //temporary should be backend
    return UUID.UUID();
  }//--create    


}
