import { Component, OnInit, Input } from '@angular/core';
import { ToteBag } from '../toteBag.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToteBagsService } from '../toteBags.service';
@Component({
  selector: 'app-tote-bag-detail',
  templateUrl: './tote-bag-detail.component.html',
  styleUrls: ['./tote-bag-detail.component.css']
})
export class ToteBagDetailComponent implements OnInit {
  @Input() toteBag?: ToteBag;
  edit = false;
  constructor(
    private route: ActivatedRoute,
    private toteBagsService: ToteBagsService,
    private location: Location
    ) { }

    ngOnInit(): void {
      this.getToteBag();
    }

    getToteBag(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.toteBagsService.getToteBag(id)
        .subscribe(tote => this.toteBag = tote);
    }
    goBack(): void {
      this.location.back();
    }

    onEdit(): void {
      this.edit = true;
    }

}
