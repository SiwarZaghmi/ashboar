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
  public somme : number = 0 ;
  config: any;
  count: number;
  searchedKeyword: string;

  ngOnInit(): void {
    this.getDataService.getData11().subscribe((res)=> {
      this.data = res as table[];
      this.calculateSome();
      });
      
  }
  constructor(private getDataService : GetDataService) { 
     this.config = {
       itemsPerPage: 5,
       currentPage: 1,
       totalItems: this.count
   };
    

}
pageChanged(event){
  this.config.currentPage = event;
}
  
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


  calculateSome() {
    for (var val of this.data)
    {
      this.somme += parseInt(val.value);
    }
  }

  caluclePercentage(value){
    return Number((value*100)/this.somme)
  }

}
