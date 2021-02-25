import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelState } from '../classes/modelState';

@Injectable({
  providedIn: 'root'
})
export class ModelStateService {
  
  private url = '/api/modelState';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    responseType: 'text' })
  };

  constructor(private http: HttpClient) { 
  }

  getModelState(): Observable<ModelState> {
    return this.http.get<ModelState>(this.url);
  }

  setModelState(modelState: ModelState): void {
    console.log("setModelState service")
    this.http.post<ModelState>(this.url, modelState, this.httpOptions).subscribe(result => console.log(result));
  }

  setCurrentRegulator(currentRegulator: string): void {
    console.log("setModelState service")
    this.http.post<ModelState>(this.url, {"currentRegulator": currentRegulator.toLowerCase()}, this.httpOptions).subscribe(result => console.log(result));
  }

  setWaterLevel(waterLevel: number): void {
    this.http.post<ModelState>(this.url, {"waterLevel": waterLevel.toString()}, this.httpOptions).subscribe(result => console.log(result));
  }

  turnOnFollowingDemo(): void {
    this.http.post<ModelState>(this.url, {"autoChangeSetSignal": true}, this.httpOptions).subscribe(result => console.log(result));
  }

}
