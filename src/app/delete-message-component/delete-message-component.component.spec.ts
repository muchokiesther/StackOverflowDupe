import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMessageComponentComponent } from './delete-message-component.component';

describe('DeleteMessageComponentComponent', () => {
  let component: DeleteMessageComponentComponent;
  let fixture: ComponentFixture<DeleteMessageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeleteMessageComponentComponent]
    });
    fixture = TestBed.createComponent(DeleteMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
