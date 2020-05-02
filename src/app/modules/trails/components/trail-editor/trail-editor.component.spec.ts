import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailEditorComponent } from './trail-editor.component';

describe('TrailEditorComponent', () => {
  let component: TrailEditorComponent;
  let fixture: ComponentFixture<TrailEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
