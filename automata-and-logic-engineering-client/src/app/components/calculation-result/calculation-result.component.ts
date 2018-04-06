import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AssignmentOneResult} from '../../models/assignment-one-result';
import {AssignmentTwoResult} from '../../models/assignment-two-result';
import {forEach} from '@angular/router/src/utils/collection';
import {AssignmentThreeResult} from "../../models/assignment-three-result";
import {ActivatedRoute} from "@angular/router";
import {AssignmentResultService} from "../../services/assignment-result.service";

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.css']
})
export class CalculationResultComponent implements OnInit {

  constructor(private assignmentResultService: AssignmentResultService, public dataService: DataService, private route: ActivatedRoute) {
  }

  defineType(result: any): number {
    if (result instanceof AssignmentOneResult) {
      return 1;
    }
    if (result instanceof AssignmentTwoResult) {
      return 2;
    }
    if (result instanceof AssignmentThreeResult) {
      return 3;
    }
  }

  getValuesFromMaps(map) {
    let results: number[] = [];
    Object.keys(map).forEach(value => {
      results.push(map[value]);

    });
    return results;
  }

  calculateResult(formula: string): void {


    const assignmentID = +this.route.snapshot.paramMap.get('id');

    this.assignmentResultService.calculateAssignmentResult(formula, assignmentID)
      .subscribe(result => {
        if (result.status == 400) {
          alert("Received an incorrect formula.")
        }
        else {
          this.dataService.assignmentResult = result;
        }
      });
  }


  ngOnInit() {
    console.log(" on inti")
    this.calculateResult(this.dataService.formulaString);
  }
}


