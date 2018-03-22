import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AssignmentOneResult} from '../../models/assignment-one-result';
import {AssignmentTwoResult} from '../../models/assignment-two-result';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.css']
})
export class CalculationResultComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  defineType(result: any): number {
    if (result instanceof AssignmentOneResult) {
      return 1;
    }
    if (result instanceof AssignmentTwoResult) {
      return 2;
    }
  }

  getValuesFromMaps(map) {
    console.log(map);
    let results: number[] = [];
    Object.keys(map).forEach(value => {
      results.push(map[value]);

    });
    return results;
  }


  ngOnInit() {

  }
}


