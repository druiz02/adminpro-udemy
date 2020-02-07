import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

 // tslint:disable-next-line:no-input-rename
 @Input('chartLabels') public doughnutChartLabels: string[] = [];
 // tslint:disable-next-line:no-input-rename
 @Input('chartData') public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
 // tslint:disable-next-line:no-input-rename
 @Input('chartType') public doughnutChartType: string = '';


  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };


  constructor() { }

  ngOnInit() {
  }

}
