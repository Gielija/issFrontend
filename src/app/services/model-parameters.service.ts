import { Injectable } from '@angular/core';
import { ModelParameters } from '../classes/modelParameters';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelParametersService {

  private url = 'http://localhost:5000/modelParameters';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
     })
  };
  
  constructor(private http: HttpClient) { 
  }

  getModelParameters(): Observable<ModelParameters> {
    return this.http.get<ModelParameters>(this.url);
  }

  setModelParameters(modelParameters: ModelParameters): void {
    console.log("setModelParameters service")
    this.http.post<ModelParameters>(this.url, modelParameters, this.httpOptions).subscribe(result => console.log(result));
  }
  
}
