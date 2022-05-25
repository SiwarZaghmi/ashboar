import { Component, OnInit , ViewChild} from '@angular/core';
import { ApexDataLabels, ApexLegend, ChartComponent } from "ng-apexcharts";
import { GetDataService } from 'src/app/services/get-data.service';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexDataLabels;
};
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private getDataService: GetDataService) {
    this.chartOptions = {
      series: [],
      chart: {
        type: "donut"
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
      ]}}

  ngOnInit(): void {
    this.getDataService.getData2().subscribe(ress => {
       this.chartOptions.series = JSON.parse(JSON.stringify(ress)).map(res => res.count)
       this.chartOptions.labels = JSON.parse(JSON.stringify(ress)).map(res => res._id)
       
    })
  }

}
