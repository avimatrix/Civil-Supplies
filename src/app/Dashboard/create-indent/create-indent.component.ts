import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-indent',
  templateUrl: './create-indent.component.html',
  styleUrls: ['./create-indent.component.css']
})
export class CreateIndentComponent implements OnInit {
  districtWiseDemand = [];
  constructor() {}
  first = 0;  
  rows = 4;
  ngOnInit() {
    this.districtWiseDemand = [
      {
        date: "24-03-2020",
        spaName: "Andhra Pradesh",
        dtName: "Ananthapuram",
        mandal:"Rapthadu",
        season:"Kharif Season",
        gunnyBags: "B-Twill(kg)",
        reqQty: "50 MT",
        status: "waiting for Jco Approval",
      },
      {
        date: "24-03-2020",
        spaName: "Andhra Pradesh",
        dtName: "Krishna",
        mandal:"G.Konduru",
        season:"Kharif Season",
        gunnyBags: "B-Twill(kg)",
        reqQty: "50 MT",
        status: "waiting for Jco Approval",
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
    return this.first === this.districtWiseDemand.length - this.rows;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }
}
