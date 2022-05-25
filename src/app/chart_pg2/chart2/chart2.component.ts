import { Component, OnInit, ViewChild } from '@angular/core';
import { data1 } from 'src/app/models/page2_models';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
  data : any 
  constructor(private getDataService: GetDataService) {
    }

  ngOnInit(): void {
    this.getDataService.getData2().subscribe((res)=> {
      this.data = res as data1[]})
  }
  calculateStuff(somevalue1){
    return Number(somevalue1) * 4.5;
  }
}
