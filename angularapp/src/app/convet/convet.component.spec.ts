import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvetComponent } from './convet.component';

describe('ConvetComponent', () => {
  let component: ConvetComponent;
  let fixture: ComponentFixture<ConvetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvetComponent]
    });
    fixture = TestBed.createComponent(ConvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
