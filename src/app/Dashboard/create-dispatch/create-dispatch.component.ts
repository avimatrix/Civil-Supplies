import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-dispatch',
  templateUrl: './create-dispatch.component.html',
  styleUrls: ['./create-dispatch.component.css']
})
export class CreateDispatchComponent implements OnInit {
  districts=[  
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Krishna",
    "Kurnool",
    "Nellore",
    "Prakasam",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa"
 ]
  createDispatch = [];
  constructor() {}
  first = 0;  
  rows = 4;
  ngOnInit() {
    this.createDispatch = [
      {
     
        mandal:"Rapthadu",
        godownName:"dummy",
        gunnyBags: "B-Twill(kg)",
        reqQty: "50 MT",
        date: "24-03-2020",
        comments:""
      },
      {
        mandal:"G.Konduru",
        godownName:"dummy",
        gunnyBags: "B-Twill(kg)",
        reqQty: "50 MT",
        date: "24-03-2020",
        comments:""
      },
      {
     
        mandal:"Rapthadu",
        godownName:"dummy",
        gunnyBags: "B-Twill(kg)",
        reqQty: "50 MT",
        date: "24-03-2020",
        comments:""
      },
      {
        mandal:"G.Konduru",
        godownName:"dummy",
        gunnyBags: "B-Twill(kg)",
        reqQty: "50 MT",
        date: "24-03-2020",
        comments:""
      },
    ];
     }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === this.createDispatch.length - this.rows;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }


}
