import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PidService } from 'src/app/services/pid.service';
import {Pid} from '../../classes/pid'

@Component({
  selector: 'pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  @Input() pid: Pid;

  @Output() onPidPicked = new EventEmitter<any>();

  constructor(private pidService: PidService) { 
    this.pid = new Pid()
  }

  ngOnInit(): void {
    this.getPid()
  }

  getPid(): void {
    this.pid = this.pidService.getPid();
  }

  public pickPid(): void {
    console.log("getPID")
    this.onPidPicked.emit(this.pid);
  }

}
