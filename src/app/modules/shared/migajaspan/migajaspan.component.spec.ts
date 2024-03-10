import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigajaspanComponent } from './migajaspan.component';

describe('MigajaspanComponent', () => {
  let component: MigajaspanComponent;
  let fixture: ComponentFixture<MigajaspanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigajaspanComponent]
    });
    fixture = TestBed.createComponent(MigajaspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
