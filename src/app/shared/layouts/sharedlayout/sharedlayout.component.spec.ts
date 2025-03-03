import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedlayoutComponent } from './sharedlayout.component';

describe('SharedlayoutComponent', () => {
  let component: SharedlayoutComponent;
  let fixture: ComponentFixture<SharedlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
