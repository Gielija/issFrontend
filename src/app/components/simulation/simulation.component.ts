import { OnInit, Component, ElementRef, Input, NgZone } from '@angular/core';
import { Application, Graphics } from 'pixi.js';
import { ModelParametersService } from 'src/app/services/model-parameters.service';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModelStateService } from 'src/app/services/model-state.service';

declare var PIXI:any;

@Component({
  selector: 'simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  public app: Application;
  stage: any
  private fontSize: number = 16
  private width: number = 400; 
  private height: number = 400;
  maxLevel: number = 7;

  waterLevel: number;
  @Input() setLevel: number;
  inflow: string;
  outflow: string;

  waterTankX: number;
  waterTankY: number;
  tankWidth: number;
  tankHeight: number;
  pipeDimension1: number;
  pipeDimention2: number;
  inflowX: number;
  inflowY: number;

  water: Graphics;
  inflowText: Graphics;
  setH: Graphics;

  constructor(private elementRef: ElementRef, private ngZone: NgZone, private modelStateService: ModelStateService, private modelParametersService: ModelParametersService) {}

  ngOnInit(): void {
    this.initSimulationParameters()
    let app = this.createPixiApplication();

    interval(1_000).pipe(
      switchMap(() => this.modelStateService.getModelState())
    ).subscribe(result => {
      this.waterLevel = result.waterLevel;
      this.inflow = result.inflow.toString();
    });

    interval(1_000).pipe(
      switchMap(() => this.modelParametersService.getModelParameters())
    ).subscribe(result => this.setLevel = result.setLevel);

    interval(1_000).
    subscribe(() => this.updateSimulation());
  }

  createPixiApplication(): any {
    //Create a Pixi Application
    let app = new PIXI.Application({width: this.width, height: this.height});
    
    //Add the canvas that Pixi automatically created for you to the HTML document
    this.elementRef.nativeElement.appendChild(app.view);
    app.renderer.backgroundColor = 0xFFFFFF;

    console.log("simulation start")

    this.stage = app.stage
    let waterTank = new Graphics();
    waterTank.lineStyle(4, 0x000000, 1);
    waterTank.beginFill(0xFFFFFF);
    waterTank.drawRect(0, 0, this.tankWidth, this.tankHeight);
    waterTank.endFill();
    waterTank.x = this.waterTankX;
    waterTank.y = this.waterTankY;
    this.stage.addChild(waterTank);

    let inflowPipe = new Graphics();
    this.inflowX = this.waterTankX - (this.pipeDimension1 / 2);
    this.inflowY = this.waterTankY + this.pipeDimention2;
    inflowPipe.lineStyle(4, 0x000000, 1);
    inflowPipe.beginFill(0x000000);
    inflowPipe.drawRect(0, 0, this.pipeDimension1, this.pipeDimention2);
    inflowPipe.endFill();
    inflowPipe.x = this.inflowX
    inflowPipe.y = this.inflowY;
    this.stage.addChild(inflowPipe);

    this.createInflowText(this.inflowX, this.inflowY);
    this.stage.addChild(this.inflowText);

    this.createWater()
    this.stage.addChild(this.water);  

    let outflowPipe = new Graphics();
    let outflowX = this.waterTankX + (this.waterTankX * 0.75);
    let outflowY = this.waterTankY + this.tankWidth - (this.pipeDimension1 / 2);
    outflowPipe.lineStyle(4, 0x000000, 1);
    outflowPipe.beginFill(0x000000);
    outflowPipe.drawRect(0, 0, this.pipeDimention2, this.pipeDimension1);
    outflowPipe.endFill();
    outflowPipe.x = outflowX;
    outflowPipe.y = outflowY;
    this.stage.addChild(outflowPipe);

   this.createSetLevel();
   this.stage.addChild(this.setH);
   let hWidth = this.pipeDimension1;
   let hHeight = this.pipeDimention2 / 3;

    let setHLegend = new Graphics();
    setHLegend.lineStyle(4, 0x000000, 0);
    setHLegend.beginFill(0xFF0000);
    setHLegend.drawRect(0, 0, hWidth, hHeight);
    setHLegend.endFill();
    setHLegend.x = this.width / 10;
    setHLegend.y = this.height / 10;
    this.stage.addChild(setHLegend);

    let text = new PIXI.Text('Poziom zadany',{fontFamily : 'Arial', fontSize: this.fontSize, fill : 0xff1010, align : 'center'});
    text.position.set(this.width/10 + hWidth + 0.1 * hWidth, this.height / 10 - this.fontSize / 2)
    this.stage.addChild(text)

    return this.stage;
  }

  initSimulationParameters(): void {
    this.waterTankX = this.width * 0.4;
    this.waterTankY = this.height * 0.3;
    this.tankWidth = this.width / 2;
    this.tankHeight = this.height / 2;
    this.pipeDimension1 = this.tankWidth * 0.2;
    this.pipeDimention2 = this.tankWidth * 0.2 / 2;
  }

  updateSimulation(): void {
    this.stage.removeChild(this.water);
    this.createWater()
    this.stage.addChild(this.water);

    this.stage.removeChild(this.inflowText);
    this.createInflowText(this.inflowX, this.inflowY);
    this.stage.addChild(this.inflowText);

    this.stage.removeChild(this.setH);
    this.createSetLevel();
    this.stage.addChild(this.setH);
  }

  createWater(): void {
    let water = new Graphics();
    let waterHeight = this.waterLevel/this.maxLevel * this.tankHeight;
    if (waterHeight > this.tankHeight) {
      waterHeight = this.tankHeight;
    }
    water.lineStyle(4, 0x0000FF, 0);
    water.beginFill(0x0000FF);
    water.drawRect(0, 0, this.tankWidth, waterHeight);
    water.endFill();
    water.x = this.waterTankX;
    water.y = this.waterTankY + this.tankHeight - waterHeight;
    this.water = water;
  }

  createSetLevel(): void {
    let hWidth = this.pipeDimension1;
    let hHeight = this.pipeDimention2 / 3;
    let setLevelInSimulation = this.setLevel / this.maxLevel * this.tankHeight;
    if (setLevelInSimulation > this.tankHeight) {
      setLevelInSimulation = this.tankHeight;
    }
    console.log("setLevelInSimulation = " + setLevelInSimulation)
    let setH = new Graphics();
    setH.lineStyle(4, 0x000000, 0);
    setH.beginFill(0xFF0000);
    setH.drawRect(0, 0, hWidth, hHeight);
    setH.endFill();
    setH.x = this.waterTankX - (hWidth / 2);
    setH.y = this.waterTankY + this.tankHeight - setLevelInSimulation;
    this.setH = setH;
  }

  private createInflowText(inflowX: number, inflowY: number) {
    let inflowText = new PIXI.Text(this.inflow, { fontFamily: 'Arial', fontSize: this.fontSize, fill: 0x000000, align: 'center' });
    inflowText.position.set(inflowX - 0.3 * inflowX, inflowY - this.fontSize / 2);
    this.inflowText = inflowText;
    this.stage.addChild(inflowText);
  }

}
  