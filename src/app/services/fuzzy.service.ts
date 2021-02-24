import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fuzzy } from '../classes/fuzzy';
import { BaseOfRules } from '../classes/baseOfRules';

@Injectable({
  providedIn: 'root'
})
export class FuzzyService {

  private url = 'api/fuzzyParameters';
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

  private toBaseOfRules(tbl: string[][]): BaseOfRules {
    return new BaseOfRules();

    let baseOfRules = new BaseOfRules();

  }
}
