import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { data1 } from 'src/app/models/page2_models';
import { GetDataService } from 'src/app/services/get-data.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  data : any;

  constructor(private getDataService: GetDataService) {
    this.chartOptions = {
      series: [
        {
          name: "",
          data: []
        },
        {
          name: "",
          data: []
        },
        
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
   
   }
  ngOnInit(): void {
    this.getDataService.getData8().subscribe((res)=> {
      this.data = res as data1[]
      console.log(this.data)
      this.chartOptions.series = [
        {
          name: "size",
          data: this.data.map(res=> res.count)
        }
      ],
      this.chartOptions.xaxis = {
        categories : this.data.map(res=> res._id),
       }
       })

    
  }
}