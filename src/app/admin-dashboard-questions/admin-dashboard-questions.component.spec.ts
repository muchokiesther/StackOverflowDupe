import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardQuestionsComponent } from './admin-dashboard-questions.component';

describe('AdminDashboardQuestionsComponent', () => {
  let component: AdminDashboardQuestionsComponent;
  let fixture: ComponentFixture<AdminDashboardQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminDashboardQuestionsComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
