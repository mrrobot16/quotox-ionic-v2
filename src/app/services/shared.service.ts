import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { END_POINTS } from '../constants/http.url.constant';
import 'rxjs/add/operator/map';
@Injectable()
export class SharedService {
  constructor(private http:Http){

  }

  getDetox(){

  }

  postDetox(){

  }

  getQuotes(){
    return fetch(END_POINTS.quotes).then( response => {
    return response.json();
  }).then(response => {
    return response;
  },logError)
  }
}

export function logError(error){
  console.log('error: ', error)
}
