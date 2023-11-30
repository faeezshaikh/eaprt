import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDetailsPage } from './modal-details.page';

describe('ModalDetailsPage', () => {
  let component: ModalDetailsPage;
  let fixture: ComponentFixture<ModalDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
