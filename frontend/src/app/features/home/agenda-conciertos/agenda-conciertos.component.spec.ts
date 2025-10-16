import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaConciertosComponent } from './agenda-conciertos.component';

describe('AgendaConciertosComponent', () => {
  let component: AgendaConciertosComponent;
  let fixture: ComponentFixture<AgendaConciertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaConciertosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaConciertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
