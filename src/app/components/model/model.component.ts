import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModelState } from 'src/app/classes/modelState';
import { ModelParametersService } from 'src/app/services/model-parameters.service';
import { ModelStateService } from 'src/app/services/model-state.service';
import { ModelParameters } from '../../classes/modelParameters'

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  @Input() modelParameters: ModelParameters;

  @Output() onModelParametersPicked = new EventEmitter<any>();

  constructor(private modelParametersService: ModelParametersService) {

   }

  ngOnInit(): void {
   this.getModelParameters();
  }

  public getModelParameters() {
    this.modelParameters = this.modelParametersService.getModelParameters();
  }

  public pickModelParameters(): void {
    console.log("pickModelParameters")
    this.onModelParametersPicked.emit(this.modelParameters);
  }

}
