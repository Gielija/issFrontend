import { Component, OnInit, Input } from '@angular/core';
import { ModelStateService } from 'src/app/services/model-state.service';

@Component({
  selector: 'main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  @Input() currentRegulator: string;
  possibleRegulatorTypes: string[] = ["PID", "FUZZY"]

  constructor(private modelStateService: ModelStateService) {
   }

  ngOnInit(): void {
  }

  public switchRegulator(): void {
    if(this.currentRegulator == 'PID'){
      this.currentRegulator = 'FUZZY';
    } else {
      this.currentRegulator = 'PID';
    }
    console.log("SWITCH");
  }

  public onChangeCurrentRegulator(): void {
    this.modelStateService.setCurrentRegulator(this.currentRegulator);
  }

  public emptyTank(): void {
    this.modelStateService.setWaterLevel(0);
  }

  public followingDemoStart(): void {
    this.modelStateService.turnOnFollowingDemo();
  }

  public followingDemoStop(): void {
    this.modelStateService.turnOffFollowingDemo();
  }

}
