import { Injectable } from '@angular/core';
import { Pid } from '../classes/pid';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PidService {

  private url = '/api/pidParameters';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  
  }

  getPid(): Observable<Pid> {
    return this.http.get<Pid>(this.url);
  }

  setPid(pid: Pid): void {
    this.http.post<Pid>(this.url, pid, this.httpOptions).subscribe();
  }
}
