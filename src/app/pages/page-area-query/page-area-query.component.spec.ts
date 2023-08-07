import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAreaQueryComponent } from './page-area-query.component';

describe('PageAreaQueryComponent', () => {
  let component: PageAreaQueryComponent;
  let fixture: ComponentFixture<PageAreaQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageAreaQueryComponent]
    });
    fixture = TestBed.createComponent(PageAreaQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
