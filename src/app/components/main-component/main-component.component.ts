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

  public onChangeCurrentRegulator(): void {
    this.modelStateService.setCurrentRegulator(this.currentRegulator);
  }

  public emptyTank(): void {
    this.modelStateService.setWaterLevel(0);
  }

  public followingDemo(): void {
    this.modelStateService.turnOnFollowingDemo();
  }

}
