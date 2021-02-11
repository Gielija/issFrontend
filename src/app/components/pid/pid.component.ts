import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Pid} from '../../interfaces/pid'

@Component({
  selector: 'pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  @Input() pid: Pid

  // @Output() onPidPicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
   
  }

  // public getPID(pid: any): void {
  //   console.log("getPID")
  //   this.onPidPicked.emit(pid);
  // }

}
