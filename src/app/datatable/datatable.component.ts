import { Component, OnInit } from '@angular/core';

import { Car } from '../models/car';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  // npm install @angular/cdk --save
  // To resolve error Can't resolve '@angular/cdk/scrolling'

  cars: Car[];
  cols: any;
  errorMessage = '';
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCarsSmall().subscribe({
      next: data => {
        this.cars = data;
      },
      error: err => this.errorMessage = err
    });

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }

}
