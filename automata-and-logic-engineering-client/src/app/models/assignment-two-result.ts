import {AssignmentResult} from "./assignment-result";

export interface AssignmentTwoResult extends AssignmentResult {

  tableData: String[];
  tableResults: Map<string, number>[];
  hashCode: String;

}


