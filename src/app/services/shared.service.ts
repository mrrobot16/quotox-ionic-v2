import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { END_POINTS } from '../constants/http.url.constant';
@Injectable()
export class SharedService {
  constructor(http:Http){
    END_POINTS;
  }

  getDetox(){

  }

  postDetox(){

  }

  getQuotes(){

  }
}
