import { Component, OnInit, ViewChild } from '@angular/core';
import {GetDataService} from 'src/app/services/get-data.service'
import {state} from 'src/app/models/chart_models'
 import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  data : any;
  public datasets: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  constructor(private getDataService: GetDataService) {
    this.chartOptions = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
       
        
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          
        }
      },
      title: {
        text: "",
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  ngOnInit(): void {
    this.getDataService.getData5().subscribe((res)=> {
      this.data = res as state[]
      this.datasets = [[this.data.map(res => res.issues_count)],[this.data.map(res=> res.Month)]]
      console.log(this.datasets)
      this.chartOptions.series = [
        {
          name: "ISSUES",
          data:  this.data.map(res => res.issues_count),
        },
      
      ],
      this.chartOptions.xaxis = {
        categories : this.data.map(res=> res.Month),
       }
       })
       console.log(this.data)
       
   
    
  }
  public updateOptions() {
    this.getDataService.getData5().subscribe((res)=> {
      this.data = res as state[]
      this.datasets = [[this.data.map(res => res.issues_count)],[this.data.map(res=> res.Month)]]
      console.log(this.datasets)
      this.chartOptions.series = [
        {
          name: "ISSUES",
          data:  this.data.map(res => res.issues_count),
        },
      
      ],
      this.chartOptions.xaxis = {
        categories : this.data.map(res=> res.Month),
       }
       })
       console.log(this.data)
  }
  updateOptions1(){
    this.getDataService.getData6().subscribe((res)=> {
      this.data = res as state[]
      this.datasets = [[this.data.map(res => res.issues_count)],[this.data.map(res=> res.Month)]]
      console.log(this.datasets)
      this.chartOptions.series = [
        {
          name: "ISSUES",
          data:  this.data.map(res => res.issues_count),
        },
      
      ],
      this.chartOptions.xaxis = {
        categories : this.data.map(res=> res.Month),
       }
       })
       console.log(this.data)
  }
}
