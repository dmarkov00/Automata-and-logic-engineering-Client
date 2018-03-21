import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AssignmentOneResult} from '../../models/assignment-one-result';
import {AssignmentTwoResult} from '../../models/assignment-two-result';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.css']
})
export class CalculationResultComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  defineType(result: any): number {
    console.log(result);
    if (result instanceof AssignmentOneResult) {
      return 1;
    }
    if (result instanceof AssignmentTwoResult) {
      return 2;
    }
  }

  ngOnInit() {

  }
}
