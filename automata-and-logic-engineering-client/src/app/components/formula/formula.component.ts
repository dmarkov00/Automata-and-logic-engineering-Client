import {Component, OnInit} from '@angular/core';
import {AssignmentResultService} from "../../services/assignment-result.service";

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  constructor(private assignmentResultService: AssignmentResultService) {

  }

  calculateResult(formula: string) {

    console.log('this wokeds');
    // this.assignmentResultService.calculateAssignmentOneResult(formula).subscribe()

  }


  ngOnInit() {
  }

}
