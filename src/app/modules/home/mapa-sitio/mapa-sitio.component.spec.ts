import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapaSitioComponent } from './mapa-sitio.component';

describe('MapaSitioComponent', () => {
  let component: MapaSitioComponent;
  let fixture: ComponentFixture<MapaSitioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaSitioComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(MapaSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
