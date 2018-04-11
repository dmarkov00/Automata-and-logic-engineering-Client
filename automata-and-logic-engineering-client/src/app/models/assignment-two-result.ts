
export class AssignmentTwoResult {

  tableData: String[];
  tableResults: Map<string, number>[];
  hashCode: String;

  constructor(tableData: String[], tableResults: Map<string, number>[], hashCode: String) {
    this.tableData = tableData;
    this.tableResults = tableResults;
    this.hashCode = hashCode;
  }
}


