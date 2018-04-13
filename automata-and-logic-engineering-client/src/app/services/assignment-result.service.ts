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
import {AssignmentFourResult} from "../models/assignment-four-result";
import {AssignmentFiveResult} from "../models/assignment-five-result";

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
      case 4:
        return this.calculateAssignmentFourResult(formula, id);
      case 5:
        return this.calculateAssignmentFive(formula, id);
    }
  }

  calculateAssignmentOneResult(formula: string, id: number): Observable<any> {
    return this.http.post<AssignmentOneResult>(this.baseUrl + id, {'formula': formula}, httpOptions)
      .map(res => {
        return new AssignmentOneResult(res.graphImage);
      }).pipe(catchError(err => {
        return of(err);
      }));
  }

  calculateAssignmentTwoResult(formula: string, id: number): Observable<any> {
    return this.http.post<AssignmentTwoResult>(this.baseUrl + id, {'formula': formula}, httpOptions).map(res => {
      return new AssignmentTwoResult(res.tableData, res.tableResults, res.hashCode);
    }).pipe(catchError(err => {
      return of(err);
    }));
  }

  calculateAssignmentThreeResult(formula: string, id: number): Observable<any> {
    return this.http.post<AssignmentThreeResult>(this.baseUrl + id, {'formula': formula}, httpOptions).map(res => {
      return new AssignmentThreeResult(res.tableData, res.simplifiedTableResults);
    }).pipe(catchError(err => {
      return of(err);
    }));
  }

  calculateAssignmentFourResult(formula: string, id: number): Observable<any> {
    return this.http.post<AssignmentFourResult>(this.baseUrl + id, {'formula': formula}, httpOptions).map(res => {
      return new AssignmentFourResult(res.disjunctiveNormalFormTruthTable, res.disjunctiveNormalFormSimplifiedTruthTable);
    }).pipe(catchError(err => {
      return of(err);
    }));
  }

  private calculateAssignmentFive(formula: string, id: number): Observable<any> {
    return this.http.post<AssignmentFiveResult>(this.baseUrl + id, {'formula': formula}, httpOptions).map(res => {
      return new AssignmentFiveResult(res.nandifiedFormula);
    }).pipe(catchError(err => {
      return of(err);
    }));
  }
}
