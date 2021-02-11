import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Pid} from '../../classes/pid'

@Component({
  selector: 'pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  @Input() pid: Pid;

  @Output() onPidPicked = new EventEmitter<any>();

  constructor() { 
    this.pid = new Pid()
  }

  ngOnInit(): void {
   
  }

  public pickPid(): void {
    console.log("getPID")
    this.onPidPicked.emit(this.pid);
  }

}
