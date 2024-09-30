import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToteBagDetailComponent } from './tote-bag-detail.component';

describe('HeroDetailComponent', () => {
  let component: ToteBagDetailComponent;
  let fixture: ComponentFixture<ToteBagDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToteBagDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToteBagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
