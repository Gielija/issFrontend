import { BaseOfRules } from "./baseOfRules";

export class Fuzzy {
   method: string;
   baseOfRules: BaseOfRules;

  constructor() { 
   this.baseOfRules = new BaseOfRules();
  }

  getBaseOfRules(): BaseOfRules {
   return this.baseOfRules;
  }

  setBaseOfRules(baseOfRules: BaseOfRules): void {
   this.baseOfRules = baseOfRules;
  }

  toTable(): string[][] {
   return this.baseOfRules.toTable();
  }

  fromTable(tbl: string[][]): void {
    this.baseOfRules.fromTable(tbl);
  }
}