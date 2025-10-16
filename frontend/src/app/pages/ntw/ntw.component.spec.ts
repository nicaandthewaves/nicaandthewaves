import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtwComponent } from './ntw.component';

describe('NtwComponent', () => {
  let component: NtwComponent;
  let fixture: ComponentFixture<NtwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NtwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
