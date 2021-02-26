import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroPersonaComponent } from './tercero-persona.component';

describe('TerceroPersonaComponent', () => {
  let component: TerceroPersonaComponent;
  let fixture: ComponentFixture<TerceroPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceroPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceroPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
