import { Component, OnInit, Input } from '@angular/core';
import { ModelState } from '../../interfaces/modelState'
import { ModelParameters } from '../../interfaces/modelParameters'
import { Pid } from 'src/app/interfaces/pid';
import { Fuzzy } from 'src/app/interfaces/fuzzy';

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

  constructor() { }

  ngOnInit(): void {
  }

  public getPid(pid: any):void {
    this.pid = pid;
    console.log('Picked pid: ', this.pid);
  }

}
