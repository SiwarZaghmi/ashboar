import { Component, OnInit } from '@angular/core';
import { Card_data } from 'src/app/models/cards_model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  products: any;

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getData().subscribe((res)=> {
      this.products = res as Card_data[]})
      
  }

}
