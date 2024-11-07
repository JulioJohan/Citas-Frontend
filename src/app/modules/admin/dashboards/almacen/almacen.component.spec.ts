import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenComponent } from './almacen.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlmacenComponent', () => {
  let component: AlmacenComponent;
  let fixture: ComponentFixture<AlmacenComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AlmacenComponent],
      imports: [RouterTestingModule] 
    });
    fixture = TestBed.createComponent(AlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
