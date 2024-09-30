import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { ToteBagsService } from '../toteBags.service';
import { TOTEBAGS } from '../toteBag.const';
import { MatDialog } from '@angular/material/dialog';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let toteService;
  let gettoteSpy: jasmine.Spy;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;


  beforeEach(waitForAsync(() => {
    toteService = jasmine.createSpyObj('ToteBagsService', ['getToteBags']);
    gettoteSpy = toteService.getToteBags.and.returnValue(of(TOTEBAGS));
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open', 'close']);
    TestBed
        .configureTestingModule({
          declarations: [DashboardComponent],
          imports: [RouterTestingModule.withRoutes([])],
          providers: [{provide:ToteBagsService, useValue: toteService},  { provide: MatDialog, useValue: mockMatDialog }]
        })
        .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Best Seller');
  });

});
