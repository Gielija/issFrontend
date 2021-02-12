import { OnInit, Component, ElementRef, Input, HostListener, NgZone, OnDestroy } from '@angular/core';
import { Application, Graphics } from 'pixi.js';

declare var PIXI:any;

@Component({
  selector: 'simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  public app: Application;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    //Create a Pixi Application
    let waterLevel = 100;
    let setLevel = 100;
    let inflow = "0.89";
    let outflow = "0.22";

    const fontSize = 16
    const width = 400; 
    const height = 400;
    let waterTankX = width * 0.4;
    let waterTankY = height * 0.3;

    let tankWidth = width / 2;
    let tankHeight = height / 2;
    let pipeDimension1 = tankWidth * 0.2;
    let pipeDimention2 = tankWidth * 0.2 / 2;

    let app = new PIXI.Application({width: width, height: height});
  

    //Add the canvas that Pixi automatically created for you to the HTML document
    this.elementRef.nativeElement.appendChild(app.view);
    app.renderer.backgroundColor = 0xFFFFFF;
    // app.renderer.autoResize = true;
   

    app.stage
    let waterTank = new Graphics();
    waterTank.lineStyle(4, 0x000000, 1);
    waterTank.beginFill(0xFFFFFF);
    waterTank.drawRect(0, 0, tankWidth, tankHeight);
    waterTank.endFill();
    waterTank.x = waterTankX;
    waterTank.y = waterTankY;
    app.stage.addChild(waterTank);

    let inflowPipe = new Graphics();
    let inflowX = waterTankX - (pipeDimension1 / 2);
    let inflowY = waterTankY + pipeDimention2;
    inflowPipe.lineStyle(4, 0x000000, 1);
    inflowPipe.beginFill(0x000000);
    inflowPipe.drawRect(0, 0, pipeDimension1, pipeDimention2);
    inflowPipe.endFill();
    inflowPipe.x = inflowX
    inflowPipe.y = inflowY;
    app.stage.addChild(inflowPipe);

    let inflowText = new PIXI.Text(inflow, {fontFamily : 'Arial', fontSize: fontSize, fill : 0x000000, align : 'center'});
    inflowText.position.set(inflowX - 0.3 * inflowX, inflowY - fontSize / 2)
    app.stage.addChild(inflowText)

    let water = new Graphics();
    water.lineStyle(4, 0x0000FF, 0);
    water.beginFill(0x0000FF);
    water.drawRect(0, 0, tankWidth, waterLevel);
    water.endFill();
    water.x = waterTankX;
    water.y = waterTankY + tankHeight - waterLevel;
    app.stage.addChild(water);

    let outflowPipe = new Graphics();
    let outflowX = waterTankX + (waterTankX * 0.75);
    let outflowY = waterTankY + tankWidth - (pipeDimension1 / 2);
    outflowPipe.lineStyle(4, 0x000000, 1);
    outflowPipe.beginFill(0x000000);
    outflowPipe.drawRect(0, 0, pipeDimention2, pipeDimension1);
    outflowPipe.endFill();
    outflowPipe.x = outflowX;
    outflowPipe.y = outflowY;
    app.stage.addChild(outflowPipe);

    let outflowText = new PIXI.Text(outflow, {fontFamily : 'Arial', fontSize: fontSize, fill : 0x000000, align : 'center'});
    outflowText.position.set(outflowX + 0.3 * inflowX, outflowY - fontSize / 2 + pipeDimension1)
    app.stage.addChild(outflowText)


    let hWidth = pipeDimension1;
    let hHeight = pipeDimention2 / 3;
    let setH = new Graphics();
    setH.lineStyle(4, 0x000000, 0);
    setH.beginFill(0xFF0000);
    setH.drawRect(0, 0, hWidth, hHeight);
    setH.endFill();
    setH.x = waterTankX - (hWidth / 2);
    setH.y = waterTankY + tankHeight - setLevel;
    app.stage.addChild(setH);

    setH = new Graphics();
    setH.lineStyle(4, 0x000000, 0);
    setH.beginFill(0xFF0000);
    setH.drawRect(0, 0, hWidth, hHeight);
    setH.endFill();
    setH.x = width / 10;
    setH.y = height / 10;
    app.stage.addChild(setH);

    
    let text = new PIXI.Text('Poziom zadany',{fontFamily : 'Arial', fontSize: fontSize, fill : 0xff1010, align : 'center'});
    text.position.set(width/10 + hWidth + 0.1 * hWidth, height / 10 - fontSize / 2)
    app.stage.addChild(text)

  }

}
  

        

