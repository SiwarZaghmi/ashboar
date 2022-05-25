import { Component, OnInit } from '@angular/core';
import {table, table1} from 'src/app/models/model'
import { GetDataService } from 'src/app/services/get-data.service';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  public data : any;
  ngOnInit(): void {
    this.getDataService.getData13().subscribe((res)=> {
      this.data = res as table1 []
    console.log(this.data)})
    

      
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
status(value){
const logged = value.filter(word => word.term == "logged").map(res => res.total);

const size = value.filter(word => word.term == "size").map(res => res.total);
if (Number(logged) == Number(size)){
  var msg1 = "done"
  return msg1
}
else {
  var msg = "en coun"
return msg}


  
}
progress(value){
  const logged = value.filter(word => word.term == "logged").map(res => res.total);
  const size = value.filter(word => word.term == "size").map(res => res.total);
  const percentage = (logged*100)/size
  return percentage
}
issues(value){
  const size = value.filter(word => word.term == "size").map(res => res.total);
  return Number(size
  )
}
costs(value){
  const logged = value.filter(word => word.term == "logged").map(res => res.tot);
  return (Number(logged) * 4.5)
}

}