import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListarMedicinasComponent } from './listar-medicinas.component';
import { FormsModule } from '@angular/forms';

describe('ListarMedicinasComponent', () => {
  let component: ListarMedicinasComponent;
  let fixture: ComponentFixture<ListarMedicinasComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ListarMedicinasComponent],
      imports: [HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(ListarMedicinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
