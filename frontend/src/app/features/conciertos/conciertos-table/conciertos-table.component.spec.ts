import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertosTableComponent } from './conciertos-table.component';

describe('ConciertosTableComponent', () => {
  let component: ConciertosTableComponent;
  let fixture: ComponentFixture<ConciertosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciertosTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciertosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
