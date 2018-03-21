import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AssignmentOneResult} from '../../models/assignment-one-result';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.css']
})
export class CalculationResultComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

  private defineType(): void {
    //
    // const calculation = this.dataService.assignmentResult;
    // test(calculation);

  }

  private test(object: any): object is AssignmentOneResult {
    return true;

  }
}
