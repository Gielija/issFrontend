import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelParameters } from '../classes/modelParameters';
import { ModelState } from '../classes/modelState';
import { ModelParametersService } from './model-parameters.service';
import { ModelStateService } from './model-state.service';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private modelParametersService: ModelParametersService,
    private modelStateService: ModelStateService) { }
}
