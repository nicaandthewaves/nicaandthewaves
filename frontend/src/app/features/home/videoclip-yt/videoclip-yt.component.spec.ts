import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoclipYtComponent } from './videoclip-yt.component';

describe('VideoclipYtComponent', () => {
  let component: VideoclipYtComponent;
  let fixture: ComponentFixture<VideoclipYtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoclipYtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoclipYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
