import { FuzzyRuleSePart } from "./fuzzyRuleSePart";

export class BaseOfRules {
   e_dd: FuzzyRuleSePart;
   e_sd: FuzzyRuleSePart;
   e_md: FuzzyRuleSePart;
   e_z: FuzzyRuleSePart;
   e_mu: FuzzyRuleSePart;
   e_su: FuzzyRuleSePart;
   e_du: FuzzyRuleSePart;


    constructor() { 
        this.e_dd = new FuzzyRuleSePart();
        this.e_sd = new FuzzyRuleSePart();
        this.e_md = new FuzzyRuleSePart();
        this.e_z = new FuzzyRuleSePart();
        this.e_mu = new FuzzyRuleSePart();
        this.e_su = new FuzzyRuleSePart();
        this.e_du = new FuzzyRuleSePart();
    }

    public getE_dd(): FuzzyRuleSePart {
        return this.e_dd;
    }

    public getE_sd(): FuzzyRuleSePart {
        return this.e_sd;
    }

    public getE_md(): FuzzyRuleSePart {
        return this.e_md;
    }

    public getE_z(): FuzzyRuleSePart {
        return this.e_z;
    }

    public getE_mu(): FuzzyRuleSePart {
        return this.e_mu;
    }

    public getE_su(): FuzzyRuleSePart {
        return this.e_su;
    }

    public getE_du(): FuzzyRuleSePart {
        return this.e_du;
    }

    toTable(): string[][] {
        let tbl = [];
        tbl.push(this.getE_du().toTable());
        tbl.push(this.getE_su().toTable());
        tbl.push(this.getE_mu().toTable());
        tbl.push(this.getE_z().toTable());
        tbl.push(this.getE_md().toTable());
        tbl.push(this.getE_sd().toTable());
        tbl.push(this.getE_dd().toTable());
        
        return tbl;
    }

    fromTable(tbl: string[][]): void {
        this.e_du.fromTable(tbl[0]);
        this.e_su.fromTable(tbl[1]);
        this.e_mu.fromTable(tbl[2]);
        this.e_z.fromTable(tbl[3]);
        this.e_md.fromTable(tbl[4]);
        this.e_sd.fromTable(tbl[5]);
        this.e_dd.fromTable(tbl[6]);
    }
 }