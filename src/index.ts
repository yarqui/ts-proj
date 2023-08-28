class Department {
  protected employees: string[] = [];
  static currentYear: string = "2023";

  constructor(private id: string, public name: string) {}

  static createEmployee(name: string) {
    console.log("year in constructor", this.currentYear);
    return { name };
  }

  describe(this: Department) {
    console.log(`Department: ${this.name} with id: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployeeInfo(): void {
    console.log("employees count: ", this.employees.length);
    console.log("employees: ", this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const it = new ITDepartment("id1", ["Yar"]);
// it.addEmployee("Mauritius");
// it.addEmployee("Valentine");
// it.getEmployeeInfo();

class Accounting extends Department {
  private lastReport: string = "";
  private reports: string[] = [];

  public get mostRecentReport(): string {
    if (!this.lastReport) {
      throw new Error("There are no reports");
    }
    return this.lastReport;
  }

  public set mostRecentReport(v: string) {
    if (!v) {
      throw new Error("Please, pass a value to set a report");
    }
    this.addReport(v);
  }

  constructor(id: string) {
    super(id, "AccountingDep");
  }

  addEmployee(employee: string): void {
    if (employee === "rus") {
      return;
    }
    this.employees.push(employee);
  }

  getEmployeeInfo(): void {
    console.log("accounting employees", this.employees);
  }

  addReport = (report: string) => {
    this.reports.push(report);
    this.lastReport = report;
  };

  printReports() {
    console.log("accounting reports: ", this.reports);
  }
}

const accounting = new Accounting("id2");
// accounting.addEmployee("rus");
// accounting.addEmployee("Freddy");
// accounting.getEmployeeInfo();
// accounting.printLastReport();
// accounting.addReport("This is the report that we have to do");
// accounting.printReports();
// accounting.addReport("Another one to check");
// accounting.addReport("AAAnd another one to check");
// accounting.printReports();
accounting.mostRecentReport = "A new financial report";
console.log(accounting.mostRecentReport);

const employee1 = Department.createEmployee("Yarquiiii");
console.log("employee1:", employee1);
const employee2 = Accounting.createEmployee("Broo");
console.log("employee2:", employee2);
const newDep = new Department("id93", "newDepatmant");
