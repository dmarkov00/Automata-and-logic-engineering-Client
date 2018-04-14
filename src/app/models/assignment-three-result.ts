export class AssignmentThreeResult {

  tableData: String[];
  simplifiedTableResults: Map<string, number>[];
  hashCode: String;

  constructor(tableData: String[], simplifiedTableResults: Map<string, number>[]) {
    this.tableData = tableData;
    this.simplifiedTableResults = simplifiedTableResults;
  }
}
