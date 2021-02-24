import { FuzzyService } from "../services/fuzzy.service";
import { BaseOfRules } from "./baseOfRules";

export class Fuzzy {
   method: string;
   baseOfRules: BaseOfRules;


//    constructor(private fuzzyService: FuzzyService) { 
//       this.fuzzyService.getFuzzy
      
//   }
  constructor() { 
   this.baseOfRules = new BaseOfRules();
  }

  getBaseOfRules(): BaseOfRules {
   return this.baseOfRules;
  }

  setBaseOfRules(baseOfRules: BaseOfRules): void {
   this.baseOfRules = baseOfRules;
  }


  toTable2(): string[][] {
   let tbl = [];
   tbl.push(this.baseOfRules.getE_du().toTable());
   tbl.push(this.baseOfRules.getE_su().toTable());
   tbl.push(this.baseOfRules.getE_mu().toTable());
   tbl.push(this.baseOfRules.getE_z().toTable());
   tbl.push(this.baseOfRules.getE_md().toTable());
   tbl.push(this.baseOfRules.getE_sd().toTable());
   tbl.push(this.baseOfRules.getE_dd().toTable());
   
   return tbl;
  }

  toTable(): string[][] {
   return this.baseOfRules.toTable();
  }

  fromTable(tbl: string[][]): void {
      this.baseOfRules.fromTable(tbl);
  }
}