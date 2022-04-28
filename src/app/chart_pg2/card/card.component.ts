import { Component, OnInit } from '@angular/core';


import { GetDataService } from 'src/app/services/get-data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CARDComponent implements OnInit {
   estimated : any
   real : number
  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
   this.getDataService.getData9().subscribe((res)=> {
     this.estimated = Number(res)
     
   })
   this.getDataService.getData10().subscribe((res)=> {
     this.real = Number(res)
   })
  }
  Estimated() {
    return this.estimated * 4.5
  }
  Real() {
    return this.real * 4.5
  }
  Ecart() {
    return this.Estimated() - this.Real()
  }
  
}
