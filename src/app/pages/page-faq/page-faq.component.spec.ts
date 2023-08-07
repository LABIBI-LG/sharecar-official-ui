import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFaqComponent } from './page-faq.component';

describe('PageFaqComponent', () => {
  let component: PageFaqComponent;
  let fixture: ComponentFixture<PageFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageFaqComponent]
    });
    fixture = TestBed.createComponent(PageFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
