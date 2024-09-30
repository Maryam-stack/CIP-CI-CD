import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToteBagDetailComponent } from './tote-bag-detail.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TOTEBAGS } from '../toteBag.const';
import { ToteBagsService } from '../toteBags.service';

describe('ToteBagDetailComponent', () => {
  let component: ToteBagDetailComponent;
  let fixture: ComponentFixture<ToteBagDetailComponent>;
  let toteService;
  let gettoteSpy: jasmine.Spy;

  beforeEach(async () => {
    const activatedRouteMock = {
      params: of({
        id: '1000',
      }),
      snapshot: {
        url: [{ path: 'totebag' }]
      }
    };
    toteService = jasmine.createSpyObj('ToteBagsService', ['getToteBag']);
    gettoteSpy = toteService.getToteBag.and.returnValue(of(TOTEBAGS));
    await TestBed.configureTestingModule({
      declarations: [ ToteBagDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock},
        { provide: ToteBagsService, useValue: toteService}
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToteBagDetailComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
