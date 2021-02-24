import { Component, OnInit, Input } from '@angular/core';
import { BaseOfRules } from 'src/app/classes/baseOfRules';
import { Fuzzy } from 'src/app/classes/fuzzy';
import { FuzzyService } from 'src/app/services/fuzzy.service';

@Component({
  selector: 'fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.scss']
})
export class FuzzyComponent implements OnInit {

  @Input() method: string;
  possibleMethods: string[] = ["Metoda środka ciężkości", "Metoda środka maksimum"];
  fuzzySets: string [] = ["DU", "ŚU", "MU", "Z", "MD", "ŚD", "DD"];
 
  @Input() conclusions: string [][] = [
    ["DU", "DU", "DU", "DU", "ŚU", "MU", "Z"],
    ["DU", "DU", "DU", "ŚU", "MU", "Z", "MD"],
    ["DU", "DU", "ŚU", "MU", "Z", "MD", "ŚD"],
    ["DU", "ŚU", "MU", "Z", "MD", "ŚD", "DD"],
    ["ŚU", "MU", "Z", "MD", "ŚD", "DD", "DD"],
    ["MU", "Z", "MD", "ŚD", "DD", "DD", "DD"],
    ["Z", "MD", "ŚD", "DD", "DD", "DD", "DD"],
  ];
  
  @Input() fuzzy: Fuzzy;
  editField: string;

  constructor(private fuzzyService: FuzzyService) { }

  ngOnInit(): void {
    // this.fuzzyService.getFuzzyHttp()
    // .subscribe(fuzzy => this.fuzzy = fuzzy);
    // this.fuzzy = this.fuzzyService.getFuzzy();
    this.fuzzy = new Fuzzy();
    // let baseOfRules = new BaseOfRules();
    this.fuzzy.fromTable(this.conclusions);
    this.fuzzyService.setBaseOfRules(this.fuzzy);
      
     
    
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateConclusions(rowId: number, colId: string, event: any) {
    const editField = event.target.textContent;
    this.conclusions[rowId][colId] = editField;

    console.log("conclusions:" + this.conclusions)
    this.fuzzy.fromTable(this.conclusions);
    this.fuzzyService.setBaseOfRules(this.fuzzy);
  }

  public pickFuzzy(): void {
    console.log("getFuzzy")
    // this.onPidPicked.emit(this.pid);
    this.fuzzyService.setBaseOfRules(this.fuzzy);
  }

}
