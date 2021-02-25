import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModelParametersService } from 'src/app/services/model-parameters.service';
import { ModelStateService } from 'src/app/services/model-state.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  waterLevel: number;
  second: number = 30;

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Poziom wody' },
    { data: [], label: 'Poziom zadany' }
  ];

  lineChartLabels: Label[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                              "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                              "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];

  lineChartOptions = {
    // responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'h [m]',
          
        },
        ticks: {
          min: 0,
          max: 7
      }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 't [s]'
        }
      }]
    }       
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(25, 118, 210, 0.28)'
    },
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.28)'
    }
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private modelStateService: ModelStateService, private modelParametersService: ModelParametersService) { }

  ngOnInit(): void {
    interval(1_000).pipe(
      switchMap(() => this.modelStateService.getModelState())
    ).subscribe(result => {
      this.waterLevel = result.waterLevel;
      this.lineChartData[0].data.push(this.waterLevel);
      if (this.lineChartData[0].data.length > 31) {
        this.lineChartData[0].data.shift();
        this.lineChartLabels.shift();
        this.second++;
        this.lineChartLabels.push(this.second.toString());
      }
    });

    interval(1_000).pipe(
      switchMap(() => this.modelParametersService.getModelParameters())
    ).subscribe(result => {
      this.lineChartData[1].data.push(result.setLevel);
      if (this.lineChartData[1].data.length > 31) {
        this.lineChartData[1].data.shift();
        this.lineChartLabels.shift();
      }
    });
  }

 

}
