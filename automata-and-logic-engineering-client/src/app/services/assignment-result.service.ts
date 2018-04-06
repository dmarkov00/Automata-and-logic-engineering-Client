import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
// import {catchError, map, tap} from 'rxjs/operators';

import {AssignmentOneResult} from '../models/assignment-one-result';
import {AssignmentTwoResult} from '../models/assignment-two-result';
import 'rxjs/add/operator/map';
import {catchError} from "rxjs/operators";
import {AssignmentThreeResult} from "../models/assignment-three-result";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', observe: 'response'})
};

@Injectable()
export class AssignmentResultService {

  private baseUrl = 'http://localhost:8080/calculate/';

  constructor(private http: HttpClient) {
  }

  calculateAssignmentResult(formula: string, id: number): Observable<any> {

    switch (id) {
      case 1:
        return this.calculateAssignmentOneResult(formula, id);
      case 2:
        return this.calculateAssignmentTwoResult(formula, id);
      case 3:
        return this.calculateAssignmentThreeResult(formula, id);
    }
  }

  calculateAssignmentOneResult(formula: string, id: number): Observable<AssignmentOneResult> {
    return this.http.post<AssignmentOneResult>(this.baseUrl + id, {'formula': formula}, httpOptions)
      .map(res => {
        return new AssignmentOneResult(res.graphImage);
      }).pipe(catchError(err => {
        return of(err);
      }));
  }

  calculateAssignmentTwoResult(formula: string, id: number): Observable<AssignmentTwoResult> {
    return this.http.post<AssignmentTwoResult>(this.baseUrl + id, {'formula': formula}, httpOptions).map(res => {
      return new AssignmentTwoResult(res.tableData, res.tableResults, res.hashCode);
    }).pipe(catchError(err => {
      return of(err);
    }));
  }
  calculateAssignmentThreeResult(formula: string, id: number): Observable<AssignmentTwoResult> {
    console.log(id);

    return this.http.post<AssignmentThreeResult>(this.baseUrl + id, {'formula': formula}, httpOptions).map(res => {
      console.log('there');

      return new AssignmentThreeResult(res.tableData, res.simplifiedTableResults);
    }).pipe(catchError(err => {
      return of(err);
    }));
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
