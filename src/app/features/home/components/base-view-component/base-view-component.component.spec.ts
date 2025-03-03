import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseViewComponentComponent } from './base-view-component.component';

describe('BaseViewComponentComponent', () => {
  let component: BaseViewComponentComponent;
  let fixture: ComponentFixture<BaseViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseViewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
