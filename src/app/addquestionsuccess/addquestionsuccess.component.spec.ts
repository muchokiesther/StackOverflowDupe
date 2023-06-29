import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionsuccessComponent } from './addquestionsuccess.component';

describe('AddquestionsuccessComponent', () => {
  let component: AddquestionsuccessComponent;
  let fixture: ComponentFixture<AddquestionsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddquestionsuccessComponent]
    });
    fixture = TestBed.createComponent(AddquestionsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
