import { Component, OnInit } from '@angular/core';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { Router } from '@angular/router';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'pie-chart-demo',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public closedElections: any;
  public pollResults: any;

  constructor(private _dahsboardService: DashboardService) { }

  ngOnInit() {
    console.log("==========Dahsboard Component============");
    this.fetchCompletedElections()

  }

  fetchCompletedElections() {
    this._dahsboardService.get_completed_elections()
      .subscribe(
        res => {
          console.log(res);
          this.closedElections = res;
        })
  }

  selectedElection(electionid) {
    this._dahsboardService.get_ballots(electionid)
      .subscribe(
        res => {
          console.log(res);
          this.pollResults = res;
        })


  }

}