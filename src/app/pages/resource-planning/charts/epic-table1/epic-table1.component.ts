import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { table } from 'src/app/models/model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-epic-table1',
  templateUrl: './epic-table1.component.html',
  styleUrls: ['./epic-table1.component.css']
})
export class EpicTable1Component implements OnInit {
    public data : any;
    public somme : number = 0 ;
    ngOnInit(): void {
      this.getDataService.getData12().subscribe((res)=> {
        this.data = res as table[];
        });
        
    }
    constructor(private getDataService : GetDataService) { }
    
  
    calculateSome() {
      for (var val of this.data)
      {
        this.somme += parseInt(val.value);
      }
    }
  
    task(Task,value){

        for (var val of value){
          if (val.term.toLowerCase() == Task.toLowerCase() ) {
            return val.total}
  
        }
      return 0
      
    }
  
  }
  

