import { Component, OnInit } from '@angular/core';
import { ToteBag } from '../toteBag.interface';
import { ToteBagsService } from '../toteBags.service';
import { Mock } from './mock';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  toteBags: ToteBag[] = [];

  constructor(private toteBagsService: ToteBagsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getToteBags();
  }

  getToteBags(): void {
    this.toteBagsService.getToteBags()
      .subscribe(toteBags => this.toteBags = toteBags.slice(1, 5));
  }

  openDialog() {
    this.dialog.open(Mock);
  }
}
