import { Component, OnInit, Input } from '@angular/core';
import { Fuzzy } from 'src/app/classes/fuzzy';
import { FuzzyService } from 'src/app/services/fuzzy.service';

@Component({
  selector: 'fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.scss']
})
export class FuzzyComponent implements OnInit {

  fuzzySets: string [] = ["DU", "SU", "MU", "Z", "MD", "SD", "DD"];
 
  @Input() conclusions: string [][] = [
    ["DU", "DU", "DU", "DU", "SU", "MU", "Z"],
    ["DU", "DU", "DU", "SU", "MU", "Z", "MD"],
    ["DU", "DU", "SU", "MU", "Z", "MD", "SD"],
    ["DU", "SU", "MU", "Z", "MD", "SD", "DD"],
    ["SU", "MU", "Z", "MD", "SD", "DD", "DD"],
    ["MU", "Z", "MD", "SD", "DD", "DD", "DD"],
    ["Z", "MD", "SD", "DD", "DD", "DD", "DD"],
  ];
  
  @Input() fuzzy: Fuzzy;
  editField: string;

  constructor(private fuzzyService: FuzzyService) { }

  ngOnInit(): void {
    this.fuzzy = new Fuzzy();
    this.fuzzy.fromTable(this.conclusions);
    this.fuzzyService.setBaseOfRules(this.fuzzy);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateConclusions(rowId: number, colId: string, event: any) {
    const editField = event.target.textContent;
    if (this.fuzzySets.indexOf(editField) > -1) {
      this.conclusions[rowId][colId] = editField;
      this.fuzzy.fromTable(this.conclusions);
      this.fuzzyService.setBaseOfRules(this.fuzzy);
    } else {
      event.target.textContent = this.conclusions[rowId][colId]
    }
   
  }

  public pickFuzzy(): void {
    console.log("getFuzzy")
    this.fuzzyService.setBaseOfRules(this.fuzzy);
  }

}
