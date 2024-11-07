import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MigajaspanComponent } from './migajaspan.component';

describe('MigajaspanComponent', () => {
  let component: MigajaspanComponent;
  let fixture: ComponentFixture<MigajaspanComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
