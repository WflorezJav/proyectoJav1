import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialPersonaComponent } from './inicial-persona.component';

describe('InicialPersonaComponent', () => {
  let component: InicialPersonaComponent;
  let fixture: ComponentFixture<InicialPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
