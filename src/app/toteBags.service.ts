import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToteBag } from './toteBag.interface';
import { TOTEBAGS } from './toteBag.const';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ToteBagsService {
  constructor(private http: HttpClient)
  {

  }
  getToteBags(): Observable<ToteBag[]> {
    const toteBags = of(TOTEBAGS);
    return toteBags;
  }

  getToteBag(id: number): Observable<ToteBag> {
    const toteBag = TOTEBAGS.find(tote => tote.id === id)!;
    return of(toteBag);
  }
}


