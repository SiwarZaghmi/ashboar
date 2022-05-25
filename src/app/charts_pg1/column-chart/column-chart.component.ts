import { Component, OnInit, ViewChild } from "@angular/core";

import { columnData } from "src/app/models/chart_models";
import { GetDataService } from "src/app/services/get-data.service";

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import { table1 } from "src/app/models/model";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};


@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  data : any;

  constructor(private getDataService: GetDataService) {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
      
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          
        ]
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return   val + " hours";
          }
        }
      }
    };
  
   
   }
  ngOnInit(): void {
    this.getDataService.getData13().subscribe((res)=> {
      this.data = res as table1[]
      let list:number[] = [];
      let list1:number[] = [];
      this.data.map(res=> res.labelss.filter(res =>res.term == 'size').map(res => list.push(res.tot)))
      this.data.map(res=> res.labelss.filter(res =>res.term == 'logged').map(res => list1.push(res.tot)))
      console.log( this.data.map(res=> res._id))
      this.chartOptions.series = [
        {
          name: "size",
          data: list,
        },
        {
          name: "logged",
          data: list1,
        },
      
      ],
      this.chartOptions.xaxis = {
        categories : this.data.map(res=> res._id),
       }
       })

    
  }
}

