import { Component, OnInit, ViewChild } from "@angular/core";
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
import { columnData } from "src/app/models/chart_models";
import { GetDataService } from "src/app/services/get-data.service";

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
    this.getDataService.getData0().subscribe((res)=> {
      this.data = res as columnData[]
      let list:string[] = [];
      this.data.map(res=> res.labels.filter(res =>res.name == 'size').map(res => list.push(res.value)))
      this.chartOptions.series = [
        {
          name: "size",
          data: list,
        },
        {
          name: "logged",
          data: this.data.map(res=> res.labels.filter(res =>res.name == 'logged').map(res => Number(res.value))),
        },
      
      ],
      this.chartOptions.xaxis = {
        categories : this.data.map(res=> res._id.title),
       }
       })

    
  }
}

