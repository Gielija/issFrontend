import { Injectable } from '@angular/core';
import { Pid } from '../classes/pid';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PidService {

  pid: Pid;

  constructor() { 
    this.pid = new Pid()
    this.pid.kp = 1;
    this.pid.Ti = 1;
    this.pid.Td = 1;
  }

  getPid(): Pid {
    return this.pid;
  }
}
