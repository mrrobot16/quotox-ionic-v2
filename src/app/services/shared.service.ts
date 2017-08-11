import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { END_POINTS } from '../constants/http.url.constant';
import 'rxjs/add/operator/map';
@Injectable()
export class SharedService {
  constructor(private http:Http){

  }

  getDetox(){
    return this.http.get(END_POINTS.detoxes).map(res => res.json())
  }

  postDetox(){

  }

  getQuotes(){
      return this.http.get(END_POINTS.quotes).map(res => res.json())
  }
}
