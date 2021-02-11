import { Component, OnInit, Input } from '@angular/core';
import { ModelState } from '../../classes/modelState'
import { ModelParameters } from '../../classes/modelParameters'
import { Pid } from 'src/app/classes/pid';
import { Fuzzy } from 'src/app/classes/fuzzy';

@Component({
  selector: 'main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  @Input() regulatorType: string;
  possibleRegulatorTypes: string[] = ["PID", "FUZZY"]
  modelState: ModelState;
  modelParameters: ModelParameters;
  pid: Pid
  fuzzy: Fuzzy

  constructor() {
    this.modelState = new ModelState();
    this.modelParameters= new ModelParameters();
    this.pid = new Pid();
    this.fuzzy = new Fuzzy();
   }

  ngOnInit(): void {
  }

  public getPid(pid: any):void {
    this.pid = pid;
    console.log('Picked pid: ', this.pid);
  }

  public getModelParameters(modelParameters: any):void {
    this.modelParameters = modelParameters;
    console.log('Picked model params: ', this.modelParameters);
  }

}
