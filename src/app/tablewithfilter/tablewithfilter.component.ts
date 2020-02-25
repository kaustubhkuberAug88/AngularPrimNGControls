import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api/selectitem';
import { FilterUtils } from 'primeng/utils';

import { Car } from '../models/car';
import { DataService } from '../data-service.service';


@Component({
  selector: 'app-tablewithfilter',
  templateUrl: './tablewithfilter.component.html',
  styleUrls: ['./tablewithfilter.component.css']
})
export class TablewithfilterComponent implements OnInit {

  // npm install @angular/cdk --save
  // To resolve error Can't resolve '@angular/cdk/scrolling'

  // Slider, dropdown, multiselect dependency

  // Folllowing errors occur if (multiselect and dropdown is enabled) while build but functionality works fine
  //ERROR in node_modules/@angular/cdk/bidi/dir.d.ts(26,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/bidi/dir.d.ts(27,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/bidi/dir.d.ts(29,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/collections/selection-model.d.ts(24,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/fixed-size-virtual-scroll.d.ts(75,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/fixed-size-virtual-scroll.d.ts(76,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/fixed-size-virtual-scroll.d.ts(82,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/fixed-size-virtual-scroll.d.ts(83,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/fixed-size-virtual-scroll.d.ts(88,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/fixed-size-virtual-scroll.d.ts(89,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/virtual-for-of.d.ts(49,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/virtual-for-of.d.ts(50,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/virtual-for-of.d.ts(56,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/virtual-for-of.d.ts(57,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/virtual-for-of.d.ts(60,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/virtual-scroll-viewport.d.ts(27,9): error TS1086: An accessor cannot be declared in an ambient context.
  // node_modules/@angular/cdk/scrolling/virtual-scroll-viewport.d.ts(28,9): error TS1086: An accessor cannot be declared in an ambient context.

  cars: Car[];
  cols: any;
  brands: SelectItem[];
  colors: SelectItem[];
  yearFilter: number;
  yearTimeout: any;

  errorMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCarsMedium().subscribe({
      next: data => {
        this.cars = data;
      },
      error: err => this.errorMessage = err
    });

    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'price', header: 'Price' }
    ];

    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
      }

      if (value === undefined || value === null) {
          return false;
      }
      
      return parseInt(filter) > value;
  }
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

}
