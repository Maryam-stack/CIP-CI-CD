import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToteBagsComponent } from './tote-bags.component';
import { ToteBagsService } from '../toteBags.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TOTEBAGS } from '../toteBag.const';
import { of } from 'rxjs';


describe('ToteBagsComponent', () => {
  let component: ToteBagsComponent;
  let fixture: ComponentFixture<ToteBagsComponent>;
  let toteService;
  let gettoteSpy: jasmine.Spy;

  beforeEach(async () => {
    toteService = jasmine.createSpyObj('ToteBagsService', ['getToteBags']);
    gettoteSpy = toteService.getToteBags.and.returnValue(of(TOTEBAGS));
    await TestBed.configureTestingModule({
      declarations: [ ToteBagsComponent ],
      providers: [{provide:ToteBagsService, useValue: toteService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToteBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
