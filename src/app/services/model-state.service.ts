import { Injectable } from '@angular/core';
import { ModelState } from '../classes/modelState';

@Injectable({
  providedIn: 'root'
})
export class ModelStateService {
  
  modelState: ModelState

  constructor() { 
    this.modelState = new ModelState()
    this.modelState.inflow = 1
    this.modelState.waterLevel = 1
  }

  getModelState(): ModelState {
    return this.modelState;
  }
}
