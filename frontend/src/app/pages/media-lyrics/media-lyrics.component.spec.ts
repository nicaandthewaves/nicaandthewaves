import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLyricsComponent } from './media-lyrics.component';

describe('MediaLyricsComponent', () => {
  let component: MediaLyricsComponent;
  let fixture: ComponentFixture<MediaLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaLyricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
