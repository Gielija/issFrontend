import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModelParameters } from '../../classes/modelParameters'

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  @Input() modelParameters: ModelParameters;

  @Output() onModelParametersPicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.modelParameters = new ModelParameters()
  }

  public pickModelParameters(): void {
    console.log("pickModelParameters")
    this.onModelParametersPicked.emit(this.modelParameters);
  }

}
