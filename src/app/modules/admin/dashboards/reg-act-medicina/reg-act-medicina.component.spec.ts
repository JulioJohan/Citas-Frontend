import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegActMedicinaComponent } from './reg-act-medicina.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegActMedicinaComponent', () => {
  let component: RegActMedicinaComponent;
  let fixture: ComponentFixture<RegActMedicinaComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,ReactiveFormsModule],
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
