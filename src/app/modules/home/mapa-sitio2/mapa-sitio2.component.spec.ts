import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MapaSitio2Component } from './mapa-sitio2.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MapaSitio2Component', () => {
  let component: MapaSitio2Component;
  let fixture: ComponentFixture<MapaSitio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [MapaSitio2Component],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaSitio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
