import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegActMedicinaComponent } from './reg-act-medicina.component';

describe('RegActMedicinaComponent', () => {
  let component: RegActMedicinaComponent;
  let fixture: ComponentFixture<RegActMedicinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegActMedicinaComponent]
    });
    fixture = TestBed.createComponent(RegActMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
