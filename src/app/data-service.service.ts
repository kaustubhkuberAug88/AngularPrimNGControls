import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Car } from './models/car';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFiles(): Observable<TreeNode[]>  {
    return this.http.get<TreeNode[]>('../assets/data/files.json');
    //return this.http.get<TreeNode[]>('../assets/data/templateData.json');                
                // .pipe(
                //   tap(res => console.log(JSON.stringify(res))),
                //   catchError(this.handleError)
                // );                
  }

  getCarsSmall(){
    return this.http.get<Car[]>('../assets/data/cars-small.json');
  }

  getCarsMedium(){
    return this.http.get<Car[]>('../assets/data/cars-medium.json');
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
