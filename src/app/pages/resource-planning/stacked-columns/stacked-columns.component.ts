import { Component, OnInit, ViewChild } from "@angular/core";
import { table } from "src/app/models/model";
import { GetDataService } from "src/app/services/get-data.service";
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
  selector: 'app-stacked-columns',
  templateUrl: './stacked-columns.component.html',
  styleUrls: ['./stacked-columns.component.css']
})
export class StackedColumnsComponent implements OnInit {
  data : any
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private getDataService: GetDataService) {
    
    
      this.chartOptions = {
        series: [
          {
            name: "PRODUCT A",
            data: [44, 55, 41, 67, 22, 43, 21, 49]
          },
          {
            name: "PRODUCT B",
            data: [13, 23, 20, 8, 13, 27, 33, 12]
          },
          {
            name: "PRODUCT C",
            data: [11, 17, 15, 15, 21, 14, 15, 13]
          }
        ],
        chart: {
          type: "bar",
          height: 500,
         
          stacked: true,
          stackType: "100%"
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
        xaxis: {
          categories: [
            "karim",
            "2011 Q2",
            "2011 Q3",
            "2011 Q4",
            "2012 Q1",
            "2012 Q2",
            "2012 Q3",
            "2012 Q4"
          ]
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "right",
          offsetX: 0,
          offsetY: 50
        }
      };
    }

    ngOnInit(): void {
      this.getDataService.getData12().subscribe((res)=> {
        this.data = res as table[]
        let feature:number[] = [];
        let task:number[] = [];
        let bug:number[] = [];
        let userStory:number[] = [];
        let test:number[] = [];
        let Title:String[] = [];
        this.data.map(res=> res.labelss.filter(res =>res.term.toLowerCase() == 'feature').map(res => feature.push((res.total))))
        this.data.map(res=> res.labelss.filter(res =>res.term.toLowerCase() == 'task').map(res => task.push((res.total))))
        this.data.map(res=> res.labelss.filter(res =>res.term.toLowerCase() == 'bug').map(res => bug.push((res.total))))
        this.data.map(res=> res.labelss.filter(res =>res.term.toLowerCase() == 'user_story').map(res => userStory.push((res.total))))
        this.data.map(res=> res.labelss.filter(res =>res.term.toLowerCase() == 'test').map(res => test.push((res.total))))
        this.data.map(res=> Title.push(res._id))
        this.chartOptions.series = [
          {
            name: "Feature",
            data:  feature
          },
          {
            name: "Task",
            data:  task
          },
          {
            name: "Bug",
            data:  bug
          },
          {
            name: "user_story",
            data:  userStory
          },
          {
            name: "Test",
            data:  test
          }
          ],
          this.chartOptions.xaxis = {
            categories : Title
           }
      
  })

  }
}


