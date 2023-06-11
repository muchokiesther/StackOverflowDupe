import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QandaPageComponent } from './qanda-page.component';

describe('QandaPageComponent', () => {
  let component: QandaPageComponent;
  let fixture: ComponentFixture<QandaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QandaPageComponent]
    });
    fixture = TestBed.createComponent(QandaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
