import {Component, OnInit} from '@angular/core';
import {AssignmentResultService} from '../../services/assignment-result.service';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  constructor(private assignmentResultService: AssignmentResultService,
              private dataService: DataService,
              private route: ActivatedRoute) {


  }

  calculateResult(formula: string): void {
    formula = formula.trim();
    if (!formula) {
      return;
    }
    // ToDo: retrieve the id from the url
    const id = this.route.snapshot.paramMap.get('id');

    const assignmentID = 2;
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

  }

}
