import { Component, OnInit } from '@angular/core';
import {table_data} from 'src/app/models/table_model'
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public data : any;
  ngOnInit(): void {
    this.getDataService.getData7().subscribe((res)=> {
      this.data = res as table_data[]})

      
  }
  config: any;
  count: number;
  searchedKeyword: string;

  
  constructor(private getDataService: GetDataService) {

     this.config = {
       itemsPerPage: 5,
       currentPage: 1,
       totalItems: this.count
   };
    

}
pageChanged(event){
  this.config.currentPage = event;
}


}