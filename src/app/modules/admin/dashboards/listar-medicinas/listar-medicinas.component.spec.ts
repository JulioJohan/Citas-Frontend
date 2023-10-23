import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicinasComponent } from './listar-medicinas.component';

describe('ListarMedicinasComponent', () => {
  let component: ListarMedicinasComponent;
  let fixture: ComponentFixture<ListarMedicinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMedicinasComponent]
    });
    fixture = TestBed.createComponent(ListarMedicinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
