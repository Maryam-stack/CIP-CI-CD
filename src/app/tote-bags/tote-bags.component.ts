import { Component, OnInit } from '@angular/core';
import { ToteBag } from '../toteBag.interface';
import { TOTEBAGS } from '../toteBag.const';
import { ToteBagsService } from '../toteBags.service';

@Component({
  selector: 'app-tote-bags',
  templateUrl: './tote-bags.component.html',
  styleUrls: ['./tote-bags.component.css']
})
export class ToteBagsComponent implements OnInit {
  toteBags: ToteBag[] = [];

  constructor(private toteBagsService: ToteBagsService) { }

  ngOnInit(): void {
    this.getToteBags();
  }

  getToteBags(): void {
    this.toteBagsService.getToteBags()
    .subscribe(toteBags => this.toteBags = toteBags);
  }
}
