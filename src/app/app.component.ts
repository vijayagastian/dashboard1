import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { DataService } from './data.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent  {
 title = 'dashboard1';
 readonly APIUrl = "http://localhost:3000/dashboard/data";
constructor(private http: HttpClient){
}
bacenddata:any=[];

refreshNotes(){
  this.http.get(this.APIUrl).subscribe(data=>{
    
    this.bacenddata=data;
  })
}

ngOnInit(){
  debugger
  this.refreshNotes();
}















  Piechart = new Chart({
   
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Electronics',y: 41.0,
          color: '#F4BFBF',
        },
        {
          name: 'Groceries',y: 33.8,
          color: '#FFD9C0',
        },
        {
          name: 'Cosmetics',y: 6.5,
          color: '#FAF0D7',
        },
        {
          name: 'Clothes', y: 15.2,
          color: '#8CC0DE',
        },
        {
          name: 'Appliances',y: 3.5,
          color: '#FFE69A',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })
  Linechart = new Chart({
    
    series: [
     {
      type: 'line',
      data: [
        {
          name: 'Electronics',y: 41.0,
          color: '#F4BFBF',
        },
        {
          name: 'Groceries',y: 33.8,
          color: '#FFD9C0',
        },
        {
          name: 'Cosmetics',y: 6.5,
          color: '#FAF0D7',
        },
        {
          name: 'Clothes', y: 15.2,
          color: '#8CC0DE',
        },
        {
          name: 'Appliances',y: 3.5,
          color: '#FFE69A',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })
  barchart = new Chart({
    
    series: [
     { 
      type: 'column',
      data: [
        {x:0,y: 41.0,},
        {x:1,y: 33.8,},
        {x:2,y: 6.5,},
        {x:3,y: 15.2,},
        {x:4,y: 3.5,},
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })
}
