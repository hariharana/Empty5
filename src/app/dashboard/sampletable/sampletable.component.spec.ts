import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletableComponent } from './sampletable.component';

describe('SampletableComponent', () => {
  let component: SampletableComponent;
  let fixture: ComponentFixture<SampletableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
