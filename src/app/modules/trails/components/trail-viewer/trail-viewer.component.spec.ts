import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailViewerComponent } from './trail-viewer.component';

describe('TrailViewerComponent', () => {
  let component: TrailViewerComponent;
  let fixture: ComponentFixture<TrailViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
