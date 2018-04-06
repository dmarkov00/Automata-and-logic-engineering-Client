import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {AssignmentResultService} from '../../services/assignment-result.service';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit, AfterViewInit {

  @ViewChild('formula') formulaString: ElementRef;

  constructor(private assignmentResultService: AssignmentResultService,
              private dataService: DataService,
              private route: ActivatedRoute) {
  }

  calculateResult(formula: string): void {
    formula = formula.trim();
    if (!formula) {
      return;
    }


    this.dataService.formulaString = formula;


    this.assignmentResultService.calculateAssignmentResult(formula, this.dataService.currentAssignmentId)
      .subscribe(result => {
        if (result.status == 400) {
          alert("Received an incorrect formula.")
        }
        else {
          this.dataService.assignmentResult = result;
        }
      });
  }

  ngAfterViewInit(): void {

    this.dataService.formulaString = this.formulaString.nativeElement.value;
    // console.log(this.formulaString.nativeElement.value);
  }

  ngOnInit() {

  }
}
