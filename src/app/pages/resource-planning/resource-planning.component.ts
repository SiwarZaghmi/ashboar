import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-planning',
  templateUrl: './resource-planning.component.html',
  styleUrls: ['./resource-planning.component.css']
})
export class ResourcePlanningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get() {
    return 8;
  }
}
