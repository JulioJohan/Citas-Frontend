import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaSitio2Component } from './mapa-sitio2.component';

describe('MapaSitio2Component', () => {
  let component: MapaSitio2Component;
  let fixture: ComponentFixture<MapaSitio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaSitio2Component]
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
