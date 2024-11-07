import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BusquedasComponent } from './busquedas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BusquedasComponent', () => {
  let component: BusquedasComponent;
  let fixture: ComponentFixture<BusquedasComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [BusquedasComponent]
    });
    fixture = TestBed.createComponent(BusquedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
