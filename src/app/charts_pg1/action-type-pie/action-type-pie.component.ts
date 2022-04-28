import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {pieData} from "src/app/models/chart_models";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { GetDataService } from 'src/app/services/get-data.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-action-type-pie',
  templateUrl: './action-type-pie.component.html',
  styleUrls: ['./action-type-pie.component.css']
})
export class ActionTypePieComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  data: any
  constructor(private getDataService: GetDataService) {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit(): void {
    this.getDataService.getData_Pie().subscribe((res)=>{
      this.data = res as pieData[]
      this.chartOptions.series = this.data.map(res => res.issues_count)
      this.chartOptions.labels = this.data.map(res => res._id.action_name)


    })
      
  }

}
