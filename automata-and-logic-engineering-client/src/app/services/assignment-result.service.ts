import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {AssignmentOneResult} from '../models/assignment-one-result';
import {AssignmentTwoResult} from '../models/assignment-two-result';
import {AssignmentResult} from '../models/assignment-result';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AssignmentResultService {

  private baseUrl = 'http://localhost:8080/calculate/';

  constructor(private http: HttpClient) {
  }

  calculateAssignmentResult(formula: string, id: number): Observable<AssignmentOneResult> {

    switch (id) {
      case 1:
        return this.calculateAssignmentOneResult(formula, id);
      case 2:
      // return this.calculateAssignmentTwoResult(formula, id);

    }
  }

  calculateAssignmentOneResult(formula: string, id: number): Observable<AssignmentOneResult> {
    return this.http.post<AssignmentOneResult>(this.baseUrl + id, {'formula': formula}, httpOptions).map(res => {
      return new AssignmentOneResult(res.graphImage);
    });
  }

  calculateAssignmentTwoResult(formula: string, id: number): Observable<AssignmentTwoResult> {
    return this.http.post<AssignmentTwoResult>(this.baseUrl + id, {'formula': formula}, httpOptions).pipe(
      catchError(this.handleError<AssignmentTwoResult>('calculateAssignmentOneResult'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
