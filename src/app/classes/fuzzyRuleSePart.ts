export class FuzzyRuleSePart {
    se_dd: string;
    se_sd: string;
    se_md: string;
    se_z: string;
    se_mu: string;
    se_su: string;
    se_du: string;
 

    constructor() { 
    }

    public getSE_dd(): string {
        return this.se_dd;
    }

    public getSE_sd(): string {
        return this.se_sd;
    }

    public getSE_md(): string {
        return this.se_md;
    }

    public getSE_z(): string {
        return this.se_z;
    }

    public getSE_mu(): string {
        return this.se_mu;
    }

    public getSE_su(): string {
        return this.se_su;
    }

    public getSE_du(): string {
        return this.se_du;
    }

    public toTable(): string[] {
        let tbl = [];
        tbl.push(this.se_du);
        tbl.push(this.se_su);
        tbl.push(this.se_mu);
        tbl.push(this.se_z);
        tbl.push(this.se_md);
        tbl.push(this.se_sd);
        tbl.push(this.se_dd);
        return tbl;
    }

    fromTable(tbl: string[]): void {
        this.se_du = tbl[0];
        this.se_su = tbl[1];
        this.se_mu = tbl[2];
        this.se_z = tbl[3];
        this.se_md = tbl[4];
        this.se_sd = tbl[5];
        this.se_dd = tbl[6];
    }
 }