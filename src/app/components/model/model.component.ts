import { Component, Input, OnInit } from '@angular/core';
import { ModelParameters } from '../../interfaces/modelParameters'

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  @Input() modelParameters: ModelParameters;

  constructor() { }

  ngOnInit(): void {
    // this.modelParameters.setLevel = 1;
    // this.modelParameters.baseField = 1.5;
  }

}
