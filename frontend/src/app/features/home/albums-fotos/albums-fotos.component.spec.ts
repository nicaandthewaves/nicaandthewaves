import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsFotosComponent } from './albums-fotos.component';

describe('AlbumsFotosComponent', () => {
  let component: AlbumsFotosComponent;
  let fixture: ComponentFixture<AlbumsFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsFotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
