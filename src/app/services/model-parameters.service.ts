import { Injectable } from '@angular/core';
import { ModelParameters } from '../classes/modelParameters';

@Injectable({
  providedIn: 'root'
})
export class ModelParametersService {

  modelParameters: ModelParameters;

  constructor() { 
    this.modelParameters = new ModelParameters()
    this.modelParameters.baseField = 1
    this.modelParameters.setLevel = 1
  }

  getModelParameters(): ModelParameters {
    return this.modelParameters;
  }
  
}
