import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastHourlyDetailComponent } from './forecast-hourly-detail.component';

describe('ForecastHourlyDetailComponent', () => {
  let component: ForecastHourlyDetailComponent;
  let fixture: ComponentFixture<ForecastHourlyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastHourlyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastHourlyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
