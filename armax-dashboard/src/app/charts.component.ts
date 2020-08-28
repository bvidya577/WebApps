import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
@Component({
  selector: 'chart-row',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class chartsComponent implements OnInit {
  ngOnInit() {
    this.barChartPopulation();
  }
  expand(w: number) {
    $('.highcharts-container, .highcharts-container svg').css({
      width: w * 0.8,
    });
  }
  contract(w: number) {
    $('.highcharts-container, .highcharts-container svg').css({
      width: w * 0.45,
    });
  }
  barChartPopulation() {
    HighCharts.chart('lineChart', {
      chart: {
        type: 'line',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },
      yAxis: {
        min: 0,
        max: 5000,
        title: {
          text: 'Population (millions)',
          align: 'high',
        },
      },
      tooltip: {
        valueSuffix: ' millions',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false,
          },
        },
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 18840,
        },
      },
      series: [
        {
          type: undefined,
          name: 'OL',
          data: [107, 31, 635, 203, 2],
        },
        {
          type: undefined,
          name: 'QL',
          data: [133, 156, 947, 408, 6],
        },
        {
          type: undefined,
          name: 'CL',
          data: [814, 841, 3714, 727, 31],
        },
        {
          type: undefined,
          name: 'DR',
          data: [1216, 1001, 4436, 738, 40],
        },
        {
          type: undefined,
          name: 'WL',
          data: [128, 371, 935, 103, 29],
        },
        {
          type: undefined,
          name: 'QL',
          data: [133, 156, 947, 408, 6],
        },
        {
          type: undefined,
          name: 'CL',
          data: [814, 841, 3714, 727, 31],
        },
        {
          type: undefined,
          name: 'DR',
          data: [1216, 1001, 4436, 738, 40],
        },
      ],
    });
  }
}
