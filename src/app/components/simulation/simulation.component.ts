import { OnInit, Component, ElementRef, Input, HostListener, NgZone, OnDestroy } from '@angular/core';
import { Application } from 'pixi.js';

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
    // this.ngZone.runOutsideAngular(() => {
    //   this.app = new Application({});
    // });
    // this.elementRef.nativeElement.appendChild(this.app.view);
    //Create a Pixi Application
    let app = new PIXI.Application({width: 256, height: 256});

    //Add the canvas that Pixi automatically created for you to the HTML document
    this.elementRef.nativeElement.appendChild(app.view);
    app.renderer.backgroundColor = 0xFFFFFF;
    app.renderer.autoResize = true;
  }
  // export class PIXIComponent implements OnInit, OnDestroy {
    // public app: Application;
  
    // @Input()
    // public devicePixelRatio = window.devicePixelRatio || 1;
  
    
    // constructor(private elementRef: ElementRef, private ngZone: NgZone) {}
  
    // init() {
     
    //   this.elementRef.nativeElement.appendChild(this.app.view);
    //   this.resize();
    // }
  
    // ngOnInit(): void {
    //   this.init();
    // }
  
    // @HostListener('window:resize')
    // public resize() {
    //   const width = this.elementRef.nativeElement.offsetWidth;
    //   const height = this.elementRef.nativeElement.offsetHeight;
    //   const viewportScale = 1 / this.devicePixelRatio;
    //   // this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
    //   this.app.view.style.transform = `scale(${viewportScale})`;
    //   this.app.view.style.transformOrigin = `top left`;
    // }
  
    // destroy() {
    //   this.app.destroy();
    // }
  
    // ngOnDestroy(): void {
    //   this.destroy();
    // }
  

        

}
