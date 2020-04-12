import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-approve-indent",
  templateUrl: "./approve-indent.component.html",
  styleUrls: ["./approve-indent.component.css"],
})
export class ApproveIndentComponent implements OnInit {
  approveIndents = [];
  constructor() {}
  first = 0;  
  rows = 4;
  ngOnInit() {
    this.approveIndents = [
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 21.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 177.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
        status: "waiting for Jco Approval",
      },
      {
        date: "5-12-2019",
        spaName: "AP civil supplies",
        month: "Dec 2019",
        indentNo: 12345,
        indentQty: 100.0,
        gunnyBags: "B-Twill(kg)",
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
    return this.first === this.approveIndents.length - this.rows;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }
}
