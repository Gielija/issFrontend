import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fuzzy } from '../classes/fuzzy';
import { BaseOfRules } from '../classes/baseOfRules';

@Injectable({
  providedIn: 'root'
})
export class FuzzyService {

  private url = 'http://192.168.0.120:5000/fuzzyParameters';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
  }

  getBaseOfRules(): Observable<Fuzzy> {
    return this.http.get<Fuzzy>(this.url);
  }

  setBaseOfRules(fuzzy: Fuzzy): void {
    this.http.post<Fuzzy>(this.url, fuzzy, this.httpOptions).subscribe();
  }
}
