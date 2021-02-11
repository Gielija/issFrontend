import { Injectable } from '@angular/core';
import { ModelParameters } from '../interfaces/modelParameters';

@Injectable({
  providedIn: 'root'
})
export class ModelParametersService {

  modelParameters: ModelParameters;

  constructor() { }

  
}
