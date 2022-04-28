import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { table } from 'src/app/models/table_model';

import { GetDataService } from 'src/app/services/get-data.service';
@Component({
  selector: 'app-tableaux',
  templateUrl: './tableaux.component.html',
  styleUrls: ['./tableaux.component.css']
})
export class TableauxComponent implements OnInit {
  public data : any;
  public somme : number;
  ngOnInit(): void {
    this.getDataService.getData11().subscribe((res)=> {
      this.data = res as table[]
      })
      
  }
  constructor(private getDataService : GetDataService) { }
  
  extraction(value){
    var assignees : string =" ";
    if (value != null){
    for (var val of value){
        
        assignees = String( assignees + "  "  + val.login )

    }
    return assignees
  }
  else{
    return "No assigne"
  }
  }
  Some() {

    for (var val of this.data)
    {
      this.somme = val.value + this.somme
    }
  }
  Calucle_Percentage(value){
    return Number((value*100)/this.somme)
  }

}
