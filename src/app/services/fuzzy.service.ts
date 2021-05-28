import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fuzzy } from '../classes/fuzzy';
import { BaseOfRules } from '../classes/baseOfRules';

@Injectable({
  providedIn: 'root'
})
export class FuzzyService {

  private url = 'http://localhost:5000/fuzzyParameters';
  httpOptions = {responseType: 'text' as 'json'};

  constructor(private http: HttpClient) { 
  }

  getBaseOfRules(): Observable<Fuzzy> {
    return this.http.get<Fuzzy>(this.url);
  }

  setBaseOfRules(fuzzy: Fuzzy): void {
    this.http.post<Fuzzy>(this.url, fuzzy, this.httpOptions).subscribe();
  }
}
