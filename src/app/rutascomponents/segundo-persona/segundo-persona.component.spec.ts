import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoPersonaComponent } from './segundo-persona.component';

describe('SegundoPersonaComponent', () => {
  let component: SegundoPersonaComponent;
  let fixture: ComponentFixture<SegundoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
