import { ModelParametersService } from "../services/model-parameters.service";
import { ModelParameters } from "./modelParameters";
import { ModelState } from "./modelState";

export class SimulationParams {
   modelParameters: ModelParameters;
   modelState: ModelState;
}