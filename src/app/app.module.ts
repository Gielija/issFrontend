import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { PidComponent } from '././components/pid/pid.component';
import { FuzzyComponent } from '././components/fuzzy/fuzzy.component';
import { MainComponentComponent } from '././components/main-component/main-component.component';
import { ModelComponent } from '././components/model/model.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    PidComponent,
    FuzzyComponent,
    MainComponentComponent,
    ModelComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  exports: [
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
