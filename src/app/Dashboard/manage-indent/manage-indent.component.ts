import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-indent',
  templateUrl: './manage-indent.component.html',
  styleUrls: ['./manage-indent.component.css']
})
export class ManageIndentComponent implements OnInit {
  manageIndents=[];
  constructor() { }
first=0;
rows=4;
  ngOnInit() {
    this.manageIndents=[
      {date:"5-12-2019",spaName:"AP sseg supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"},
      {date:"5-12-2019",spaName:"AP civil supplies",month:"Dec 2019",indentNo:12345,indentQty:100.00,gunnyBags:"B-Twill(kg)",status:"waiting for Jco Approval"}
    ]
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
    return this.first === (this.manageIndents.length - this.rows);
}

isFirstPage(): boolean {
    return this.first === 0;
}
}
